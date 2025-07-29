import { ColorScheme } from "@/hooks/useTheme";
import { VibeMode } from "@/hooks/useVibes";
import { StyleSheet } from "react-native";
import { borderRadius, getVibeColors, shadows, spacing } from "./theme";

export const createStatsStyles = (colors: ColorScheme, vibe: VibeMode) => {
  const vibeColors = getVibeColors(colors, vibe);

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      paddingHorizontal: spacing.md,
      paddingBottom: 120,
    },
    header: {
      paddingVertical: spacing.lg,
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textMuted,
    },
    progressSection: {
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
      marginBottom: spacing.lg,
      ...shadows.soft,
    },
    progressRingContainer: {
      alignItems: "center",
    },
    progressRing: {
      width: 150,
      height: 150,
      borderRadius: 75,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.lg,
      ...shadows.soft,
    },
    progressRingInner: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: colors.surface,
      justifyContent: "center",
      alignItems: "center",
    },
    progressNumber: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.text,
    },
    progressLabel: {
      fontSize: 14,
      color: colors.textMuted,
      marginTop: 4,
    },
    progressDetails: {
      alignItems: "center",
    },
    progressDetailText: {
      fontSize: 16,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    progressMotivation: {
      fontSize: 14,
      color: colors.textMuted,
      fontStyle: "italic",
    },
    statsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    statCard: {
      flex: 1,
      minWidth: "45%",
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      ...shadows.soft,
    },
    statIcon: {
      width: 48,
      height: 48,
      borderRadius: borderRadius.lg,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: spacing.xs,
    },
    statLabel: {
      fontSize: 14,
      color: colors.textMuted,
      textAlign: "center",
    },
    achievementsSection: {
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
      ...shadows.soft,
    },
    achievementsList: {
      gap: spacing.md,
    },
    achievement: {
      flexDirection: "row",
      alignItems: "center",
      padding: spacing.md,
      backgroundColor: colors.background,
      borderRadius: borderRadius.md,
    },
    achievementLocked: {
      opacity: 0.5,
    },
    achievementEmoji: {
      fontSize: 24,
      marginRight: spacing.md,
    },
    achievementContent: {
      flex: 1,
    },
    achievementTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 2,
    },
    achievementTitleLocked: {
      color: colors.textMuted,
    },
    achievementDescription: {
      fontSize: 14,
      color: colors.textMuted,
    },
    achievementDescriptionLocked: {
      color: colors.textMuted,
      opacity: 0.7,
    },
  });
};
