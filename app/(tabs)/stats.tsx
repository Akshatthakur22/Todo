import ProgressRing from "@/components/ProgressRing";
import { useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStatsStyles } from "../../assets/styles/stats.styles"; // Adjust the path as necessary

export default function StatsScreen() {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const { tasks, getStats } = useTasks();
  const styles = createStatsStyles(colors, currentVibe);

  const stats = getStats();
  const completionRate =
    stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  const motivationalMessages = [
    "you're doing great! 🌟",
    "small steps, big dreams ✨",
    "progress over perfection 💫",
    "one task at a time 🐢",
    "you got this! 💪",
  ];

  const getMessage = () => {
    if (completionRate >= 80) return "amazing work today! 🔥";
    if (completionRate >= 50) return "halfway there, keep going! 💫";
    if (completionRate >= 20) return "nice start! ✨";
    return motivationalMessages[
      Math.floor(Math.random() * motivationalMessages.length)
    ];
  };

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Your Progress 📈</Text>
            <Text style={styles.subtitle}>{getMessage()}</Text>
          </View>

          {/* Progress Ring */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.progressSection}
          >
            <ProgressRing
              progress={completionRate}
              completed={stats.completed}
              total={stats.total}
            />
          </LinearGradient>

          {/* Stats Cards */}
          <View style={styles.statsGrid}>
            {/* Total Tasks */}
            <LinearGradient
              colors={colors.gradients.surface}
              style={styles.statCard}
            >
              <LinearGradient
                colors={colors.gradients.primary}
                style={styles.statIcon}
              >
                <Ionicons name="list" size={24} color="#fff" />
              </LinearGradient>
              <Text style={styles.statNumber}>{stats.total}</Text>
              <Text style={styles.statLabel}>Total Tasks</Text>
            </LinearGradient>

            {/* Completed */}
            <LinearGradient
              colors={colors.gradients.surface}
              style={styles.statCard}
            >
              <LinearGradient
                colors={colors.gradients.success}
                style={styles.statIcon}
              >
                <Ionicons name="checkmark-circle" size={24} color="#fff" />
              </LinearGradient>
              <Text style={styles.statNumber}>{stats.completed}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </LinearGradient>

            {/* Pending */}
            <LinearGradient
              colors={colors.gradients.surface}
              style={styles.statCard}
            >
              <LinearGradient
                colors={colors.gradients.warning}
                style={styles.statIcon}
              >
                <Ionicons name="time" size={24} color="#fff" />
              </LinearGradient>
              <Text style={styles.statNumber}>{stats.pending}</Text>
              <Text style={styles.statLabel}>Pending</Text>
            </LinearGradient>

            {/* Streak */}
            <LinearGradient
              colors={colors.gradients.surface}
              style={styles.statCard}
            >
              <LinearGradient
                colors={colors.gradients.accent}
                style={styles.statIcon}
              >
                <Ionicons name="flame" size={24} color="#fff" />
              </LinearGradient>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </LinearGradient>
          </View>

          {/* Achievements */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.achievementsSection}
          >
            <Text style={styles.sectionTitle}>Achievements 🏆</Text>
            <View style={styles.achievementsList}>
              <View style={styles.achievement}>
                <Text style={styles.achievementEmoji}>🎯</Text>
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementTitle}>First Task</Text>
                  <Text style={styles.achievementDescription}>
                    Completed your first task!
                  </Text>
                </View>
              </View>

              <View style={styles.achievement}>
                <Text style={styles.achievementEmoji}>🔥</Text>
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementTitle}>On Fire</Text>
                  <Text style={styles.achievementDescription}>
                    3 day productivity streak!
                  </Text>
                </View>
              </View>

              <View style={[styles.achievement, styles.achievementLocked]}>
                <Text style={styles.achievementEmoji}>🌟</Text>
                <View style={styles.achievementContent}>
                  <Text
                    style={[
                      styles.achievementTitle,
                      styles.achievementTitleLocked,
                    ]}
                  >
                    Weekly Warrior
                  </Text>
                  <Text
                    style={[
                      styles.achievementDescription,
                      styles.achievementDescriptionLocked,
                    ]}
                  >
                    Complete 10 tasks in a week
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
