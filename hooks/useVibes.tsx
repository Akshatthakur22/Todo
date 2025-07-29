import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type VibeMode = "chill" | "focus" | "later";

export interface VibeConfig {
  name: string;
  emoji: string;
  description: string;
  primaryColor: string;
  gradientColors: [string, string];
}

export const vibeConfigs: Record<VibeMode, VibeConfig> = {
  chill: {
    name: "Chill Mode",
    emoji: "🌊",
    description: "take it easy, one step at a time",
    primaryColor: "#a8d5f0",
    gradientColors: ["#a8d5f0", "#8cc8e8"],
  },
  focus: {
    name: "Focus Mode",
    emoji: "🎯",
    description: "locked in and ready to go",
    primaryColor: "#c8b5f0",
    gradientColors: ["#c8b5f0", "#b899ed"],
  },
  later: {
    name: "L8r Mode",
    emoji: "🐼",
    description: "we'll get to it... eventually",
    primaryColor: "#f0b5d2",
    gradientColors: ["#f0b5d2", "#ed99c5"],
  },
};

interface VibeContextType {
  currentVibe: VibeMode;
  setVibe: (vibe: VibeMode) => void;
  getVibeConfig: () => VibeConfig;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export const VibeProvider = ({ children }: { children: ReactNode }) => {
  const [currentVibe, setCurrentVibe] = useState<VibeMode>("chill");

  useEffect(() => {
    AsyncStorage.getItem("l8r_vibe").then((value) => {
      if (value && value in vibeConfigs) {
        setCurrentVibe(value as VibeMode);
      }
    });
  }, []);

  const setVibe = async (vibe: VibeMode) => {
    setCurrentVibe(vibe);
    await AsyncStorage.setItem("l8r_vibe", vibe);
  };

  const getVibeConfig = () => vibeConfigs[currentVibe];

  return (
    <VibeContext.Provider value={{ currentVibe, setVibe, getVibeConfig }}>
      {children}
    </VibeContext.Provider>
  );
};

export const useVibes = () => {
  const context = useContext(VibeContext);
  if (context === undefined) {
    throw new Error("useVibes must be used within a VibeProvider");
  }
  return context;
};
