import { ColorScheme } from "@/hooks/useTheme";
import { VibeMode } from "@/hooks/useVibes";

export const getVibeColors = (colors: ColorScheme, vibe: VibeMode) => {
  const vibeOverrides = {
    chill: {
      primary: "#a8d5f0",
      gradients: {
        ...colors.gradients,
        primary: ["#a8d5f0", "#8cc8e8"] as [string, string],
      },
    },
    focus: {
      primary: "#c8b5f0",
      gradients: {
        ...colors.gradients,
        primary: ["#c8b5f0", "#b899ed"] as [string, string],
      },
    },
    later: {
      primary: "#f0b5d2",
      gradients: {
        ...colors.gradients,
        primary: ["#f0b5d2", "#ed99c5"] as [string, string],
      },
    },
  };

  return {
    ...colors,
    ...vibeOverrides[vibe],
  };
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  soft: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
};
