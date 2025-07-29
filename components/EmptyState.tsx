import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const EmptyState = () => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const styles = createHomeStyles(colors, currentVibe);

  const emptyMessages = {
    chill: {
      title: "all clear, nice! 🌊",
      subtitle: "time to add something chill to do",
    },
    focus: {
      title: "ready to conquer! 🎯",
      subtitle: "add your first task and let's go",
    },
    later: {
      title: "nothing here... yet 🐼",
      subtitle: "maybe add something for later?",
    },
  };

  const message = emptyMessages[currentVibe];

  return (
    <View style={styles.emptyContainer}>
      <LinearGradient
        colors={colors.gradients.empty}
        style={styles.emptyIconContainer}
      >
        <Ionicons name="leaf-outline" size={80} color={colors.textMuted} />
      </LinearGradient>
      <Text style={styles.emptyTitle}>{message.title}</Text>
      <Text style={styles.emptySubtitle}>{message.subtitle}</Text>
    </View>
  );
};

export default EmptyState;
