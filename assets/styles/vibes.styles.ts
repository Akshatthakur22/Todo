import { ColorScheme } from "@/hooks/useTheme";
import { VibeMode } from "@/hooks/useVibes";
import { StyleSheet } from "react-native";
import { borderRadius, getVibeColors, shadows, spacing } from "./theme";

export const createVibesStyles = (colors: ColorScheme, vibe: VibeMode) => {
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
    },
    titleContainer: {
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
    section: {
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
      marginBottom: spacing.lg,
      ...shadows.soft,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.md,
    },
    vibeGrid: {
      gap: spacing.md,
    },
    vibeCard: {
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      ...shadows.soft,
    },
    vibeCardActive: {
      transform: [{ scale: 1.02 }],
    },
    vibeEmoji: {
      fontSize: 32,
      marginBottom: spacing.sm,
    },
    vibeName: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.xs,
    },
    vibeNameActive: {
      color: "#fff",
    },
    vibeDescription: {
      fontSize: 14,
      color: colors.textMuted,
      textAlign: "center",
    },
    vibeDescriptionActive: {
      color: "#fff",
      opacity: 0.9,
    },
    quotesHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    refreshButton: {
      width: 32,
      height: 32,
      borderRadius: borderRadius.full,
      justifyContent: "center",
      alignItems: "center",
    },
    quote: {
      fontSize: 18,
      fontStyle: "italic",
      color: colors.text,
      textAlign: "center",
      lineHeight: 26,
    },
    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    settingLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    settingIcon: {
      width: 32,
      height: 32,
      borderRadius: borderRadius.sm,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.md,
    },
    settingText: {
      fontSize: 16,
      color: colors.text,
    },
    aboutText: {
      fontSize: 16,
      color: colors.textMuted,
      lineHeight: 24,
      marginBottom: spacing.md,
    },
    versionText: {
      fontSize: 14,
      color: colors.textMuted,
      fontFamily: "monospace",
    },
  });
};
