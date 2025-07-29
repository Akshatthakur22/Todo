import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ColorScheme {
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  accent: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    secondary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    accent: [string, string];
    empty: [string, string];
  };
}

const lightColors: ColorScheme = {
  background: "#faf9f7",
  surface: "#ffffff",
  text: "#2d3748",
  textMuted: "#718096",
  border: "#e2e8f0",
  primary: "#a8d5f0",
  secondary: "#c8b5f0",
  success: "#b5f0c8",
  warning: "#f0d5a8",
  danger: "#f0b5b5",
  accent: "#f0b5d2",
  shadow: "rgba(0,0,0,0.1)",
  gradients: {
    background: ["#faf9f7", "#f7f5f3"],
    surface: ["#ffffff", "#faf9f7"],
    primary: ["#a8d5f0", "#8cc8e8"],
    secondary: ["#c8b5f0", "#b899ed"],
    success: ["#b5f0c8", "#9ae8b5"],
    warning: ["#f0d5a8", "#edc995"],
    danger: ["#f0b5b5", "#ed9999"],
    accent: ["#f0b5d2", "#ed99c5"],
    empty: ["#f7f6f4", "#f0efed"],
  },
};

const darkColors: ColorScheme = {
  background: "#1a202c",
  surface: "#2d3748",
  text: "#f7fafc",
  textMuted: "#a0aec0",
  border: "#4a5568",
  primary: "#63b3ed",
  secondary: "#b794f6",
  success: "#68d391",
  warning: "#f6e05e",
  danger: "#fc8181",
  accent: "#f687b3",
  shadow: "rgba(0,0,0,0.3)",
  gradients: {
    background: ["#1a202c", "#2d3748"],
    surface: ["#2d3748", "#4a5568"],
    primary: ["#63b3ed", "#4299e1"],
    secondary: ["#b794f6", "#9f7aea"],
    success: ["#68d391", "#48bb78"],
    warning: ["#f6e05e", "#ecc94b"],
    danger: ["#fc8181", "#f56565"],
    accent: ["#f687b3", "#ed64a6"],
    empty: ["#4a5568", "#718096"],
  },
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
