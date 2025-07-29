import { createStatsStyles } from "../assets/styles/stats.styles"; // Adjust the path as necessary
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

interface ProgressRingProps {
  progress: number;
  completed: number;
  total: number;
}

const ProgressRing = ({ progress, completed, total }: ProgressRingProps) => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const styles = createStatsStyles(colors, currentVibe);

  return (
    <View style={styles.progressRingContainer}>
      <LinearGradient
        colors={colors.gradients.primary}
        style={styles.progressRing}
      >
        <View style={styles.progressRingInner}>
          <Text style={styles.progressNumber}>{Math.round(progress)}%</Text>
          <Text style={styles.progressLabel}>complete</Text>
        </View>
      </LinearGradient>
      <View style={styles.progressDetails}>
        <Text style={styles.progressDetailText}>
          {completed} out of {total} tasks done
        </Text>
        <Text style={styles.progressMotivation}>
          {progress >= 80
            ? "you're crushing it! 🔥"
            : progress >= 50
              ? "halfway there! 💫"
              : progress >= 20
                ? "good start! ✨"
                : "every journey starts with one step 🌱"}
        </Text>
      </View>
    </View>
  );
};

export default ProgressRing;
