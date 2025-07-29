import { ColorScheme } from "@/hooks/useTheme";
import { VibeMode } from "@/hooks/useVibes";
import { StyleSheet } from "react-native";
import { borderRadius, getVibeColors, shadows, spacing } from "./theme";

export const createHomeStyles = (colors: ColorScheme, vibe: VibeMode) => {
  const vibeColors = getVibeColors(colors, vibe);

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: spacing.md,
    },
    header: {
      paddingVertical: spacing.lg,
    },
    headerTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: spacing.md,
    },
    greeting: {
      fontSize: 14,
      color: colors.textMuted,
      marginBottom: 4,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.text,
    },
    vibeIndicator: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      ...shadows.soft,
    },
    vibeText: {
      fontSize: 12,
      fontWeight: "600",
      color: "#fff",
      textTransform: "uppercase",
    },
    progressContainer: {
      marginTop: spacing.sm,
    },
    progressInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    progressLabel: {
      fontSize: 14,
      color: colors.textMuted,
    },
    progressPercentage: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    progressBarContainer: {
      height: 8,
      backgroundColor: colors.border,
      borderRadius: borderRadius.sm,
      overflow: "hidden",
    },
    progressBar: {
      flex: 1,
      backgroundColor: colors.border,
      borderRadius: borderRadius.sm,
    },
    progressFill: {
      height: "100%",
      borderRadius: borderRadius.sm,
    },
    inputSection: {
      marginBottom: spacing.lg,
    },
    inputContainer: {
      flexDirection: "row",
      padding: spacing.md,
      borderRadius: borderRadius.lg,
      alignItems: "flex-end",
      ...shadows.soft,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.text,
      paddingVertical: spacing.sm,
      paddingRight: spacing.md,
      maxHeight: 100,
    },
    addButton: {
      width: 44,
      height: 44,
      borderRadius: borderRadius.full,
      justifyContent: "center",
      alignItems: "center",
      ...shadows.soft,
    },
    addButtonDisabled: {
      opacity: 0.5,
    },
    taskList: {
      flex: 1,
    },
    taskListContent: {
      paddingBottom: spacing.xl,
    },
    taskItem: {
      flexDirection: "row",
      padding: spacing.md,
      marginBottom: spacing.md,
      borderRadius: borderRadius.lg,
      alignItems: "flex-start",
      ...shadows.soft,
    },
    checkbox: {
      marginRight: spacing.md,
      marginTop: 2,
    },
    checkboxInner: {
      width: 24,
      height: 24,
      borderRadius: borderRadius.full,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.border,
    },
    taskContent: {
      flex: 1,
    },
    taskText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 22,
      marginBottom: spacing.sm,
    },
    taskTextCompleted: {
      textDecorationLine: "line-through",
      color: colors.textMuted,
      opacity: 0.6,
    },
    taskActions: {
      flexDirection: "row",
      gap: spacing.sm,
    },
    actionButton: {
      width: 32,
      height: 32,
      borderRadius: borderRadius.sm,
      justifyContent: "center",
      alignItems: "center",
    },
    editContainer: {
      flex: 1,
    },
    editInput: {
      fontSize: 16,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.sm,
      padding: spacing.sm,
      marginBottom: spacing.sm,
      backgroundColor: colors.background,
    },
    editActions: {
      flexDirection: "row",
      gap: spacing.sm,
    },
    editButton: {
      width: 32,
      height: 32,
      borderRadius: borderRadius.sm,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: spacing.xxl,
    },
    emptyIconContainer: {
      width: 120,
      height: 120,
      borderRadius: borderRadius.full,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.text,
      marginBottom: spacing.sm,
      textAlign: "center",
    },
    emptySubtitle: {
      fontSize: 16,
      color: colors.textMuted,
      textAlign: "center",
      paddingHorizontal: spacing.lg,
    },
    pandaContainer: {
      position: "absolute",
      bottom: 100,
      right: spacing.md,
      alignItems: "flex-end",
    },
    pandaAvatar: {
      width: 60,
      height: 60,
      borderRadius: borderRadius.full,
      justifyContent: "center",
      alignItems: "center",
      ...shadows.medium,
    },
    pandaEmoji: {
      fontSize: 28,
    },
    pandaMessage: {
      position: "absolute",
      bottom: 70,
      right: 0,
      padding: spacing.md,
      borderRadius: borderRadius.lg,
      minWidth: 150,
      maxWidth: 200,
      ...shadows.soft,
    },
    pandaMessageText: {
      fontSize: 14,
      color: colors.text,
      textAlign: "center",
    },
    pandaMessageTail: {
      position: "absolute",
      bottom: -6,
      right: 20,
      width: 12,
      height: 12,
      backgroundColor: colors.surface,
      transform: [{ rotate: "45deg" }],
    },
  });
};
