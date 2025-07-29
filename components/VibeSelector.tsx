import { createVibesStyles } from "@/assets/styles/vibes.styles";
import { useTheme } from "@/hooks/useTheme";
import { useVibes, vibeConfigs, VibeMode } from "@/hooks/useVibes";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

const VibeSelector = () => {
  const { colors } = useTheme();
  const { currentVibe, setVibe } = useVibes();
  const styles = createVibesStyles(colors, currentVibe);

  const handleVibeChange = (vibe: VibeMode) => {
    setVibe(vibe);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitle}>Choose Your Vibe 🎭</Text>
      <View style={styles.vibeGrid}>
        {Object.entries(vibeConfigs).map(([key, config]) => {
          const isActive = currentVibe === key;
          return (
            <TouchableOpacity
              key={key}
              onPress={() => handleVibeChange(key as VibeMode)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={
                  isActive ? config.gradientColors : colors.gradients.empty
                }
                style={[styles.vibeCard, isActive && styles.vibeCardActive]}
              >
                <Text style={styles.vibeEmoji}>{config.emoji}</Text>
                <Text
                  style={[styles.vibeName, isActive && styles.vibeNameActive]}
                >
                  {config.name}
                </Text>
                <Text
                  style={[
                    styles.vibeDescription,
                    isActive && styles.vibeDescriptionActive,
                  ]}
                >
                  {config.description}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default VibeSelector;
