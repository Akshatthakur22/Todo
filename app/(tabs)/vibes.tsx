import { createVibesStyles } from "@/assets/styles/vibes.styles";
import LazyQuotes from "@/components/LazyQuotes";
import VibeSelector from "@/components/VibeSelector";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VibesScreen() {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const { currentVibe } = useVibes();
  const styles = createVibesStyles(colors, currentVibe);

  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);

  const handleToggle = (
    setter: (value: boolean) => void,
    currentValue: boolean
  ) => {
    Haptics.selectionAsync();
    setter(!currentValue);
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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Your Vibes ✨</Text>
              <Text style={styles.subtitle}>customize your chill space</Text>
            </View>
          </View>

          {/* Vibe Selector */}
          <VibeSelector />

          {/* Motivational Quotes */}
          <LazyQuotes />

          {/* Settings Section */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>Settings 🔧</Text>

            {/* Dark Mode */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <LinearGradient
                  colors={colors.gradients.primary}
                  style={styles.settingIcon}
                >
                  <Ionicons name="moon" size={18} color="#fff" />
                </LinearGradient>
                <Text style={styles.settingText}>Dark Mode</Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                thumbColor="#fff"
                trackColor={{ false: colors.border, true: colors.primary }}
                ios_backgroundColor={colors.border}
              />
            </View>

            {/* Notifications */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <LinearGradient
                  colors={colors.gradients.accent}
                  style={styles.settingIcon}
                >
                  <Ionicons name="notifications" size={18} color="#fff" />
                </LinearGradient>
                <Text style={styles.settingText}>Gentle Nudges</Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={() =>
                  handleToggle(setNotifications, notifications)
                }
                thumbColor="#fff"
                trackColor={{ false: colors.border, true: colors.accent }}
                ios_backgroundColor={colors.border}
              />
            </View>

            {/* Sounds */}
            <View style={[styles.settingItem, { borderBottomWidth: 0 }]}>
              <View style={styles.settingLeft}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={styles.settingIcon}
                >
                  <Ionicons name="musical-notes" size={18} color="#fff" />
                </LinearGradient>
                <Text style={styles.settingText}>Chill Sounds</Text>
              </View>
              <Switch
                value={sounds}
                onValueChange={() => handleToggle(setSounds, sounds)}
                thumbColor="#fff"
                trackColor={{ false: colors.border, true: colors.success }}
                ios_backgroundColor={colors.border}
              />
            </View>
          </LinearGradient>

          {/* About Section */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>About L8r 🐼</Text>
            <Text style={styles.aboutText}>
              Your gentle productivity companion. Built for the chill generation
              who gets things done... eventually.
            </Text>
            <Text style={styles.versionText}>v1.0.0</Text>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
