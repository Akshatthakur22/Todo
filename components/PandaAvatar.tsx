import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PandaAvatar = () => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const { getStats } = useTasks();
  const [showMessage, setShowMessage] = useState(false);
  const styles = createHomeStyles(colors, currentVibe);

  const stats = getStats();
  const completionRate =
    stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  const messages = {
    high: [
      "you're on fire! 🔥",
      "absolutely killing it! ⭐",
      "productivity master! 🏆",
    ],
    medium: ["nice progress! 👏", "keep going! 💪", "you got this! ✨"],
    low: [
      "baby steps count too! 🐣",
      "progress is progress! 🌱",
      "one task at a time! 🐢",
    ],
    none: [
      "ready when you are! 😌",
      "no pressure here! 🌸",
      "take your time! ⏰",
    ],
  };

  const getMessageCategory = () => {
    if (stats.total === 0) return "none";
    if (completionRate >= 70) return "high";
    if (completionRate >= 40) return "medium";
    return "low";
  };

  const getRandomMessage = () => {
    const category = getMessageCategory();
    const categoryMessages = messages[category];
    return categoryMessages[
      Math.floor(Math.random() * categoryMessages.length)
    ];
  };

  const handlePress = () => {
    setShowMessage(!showMessage);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={styles.pandaContainer}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={styles.pandaAvatar}
        >
          <Text style={styles.pandaEmoji}>🐼</Text>
        </LinearGradient>
      </TouchableOpacity>

      {showMessage && (
        <LinearGradient
          colors={colors.gradients.surface}
          style={styles.pandaMessage}
        >
          <Text style={styles.pandaMessageText}>{getRandomMessage()}</Text>
          <View style={styles.pandaMessageTail} />
        </LinearGradient>
      )}
    </View>
  );
};

export default PandaAvatar;
