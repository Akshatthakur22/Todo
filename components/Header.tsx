import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const { currentVibe, getVibeConfig } = useVibes();
  const { getStats } = useTasks();
  const styles = createHomeStyles(colors, currentVibe);

  const stats = getStats();
  const vibeConfig = getVibeConfig();
  const progressPercentage =
    stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "good morning ☀️";
    if (hour < 17) return "good afternoon 🌤️";
    return "good evening 🌙";
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View>
          <Text style={styles.greeting}>{getGreeting()}</Text>
          <Text style={styles.title}>L8r Tasks {vibeConfig.emoji}</Text>
        </View>
        <LinearGradient
          colors={vibeConfig.gradientColors}
          style={styles.vibeIndicator}
        >
          <Text style={styles.vibeText}>{currentVibe}</Text>
        </LinearGradient>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressLabel}>
            {stats.completed} of {stats.total} done
          </Text>
          <Text style={styles.progressPercentage}>
            {Math.round(progressPercentage)}%
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
