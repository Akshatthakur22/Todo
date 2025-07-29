import { TaskProvider } from "@/hooks/useTasks";
import { ThemeProvider } from "@/hooks/useTheme";
import { VibeProvider } from "@/hooks/useVibes";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after app loads
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      <VibeProvider>
        <TaskProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </TaskProvider>
      </VibeProvider>
    </ThemeProvider>
  );
}
