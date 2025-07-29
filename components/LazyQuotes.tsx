import { createVibesStyles } from "@/assets/styles/vibes.styles";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const quotes = [
  "progress over perfection ✨",
  "one step at a time, bestie 🐢",
  "you're doing better than you think 💫",
  "small wins are still wins 🌟",
  "it's okay to take breaks 🌸",
  "done is better than perfect 🎯",
  "you got this, no rush 💪",
  "chill vibes, steady progress 🌊",
  "be gentle with yourself 🤗",
  "every task completed is a victory 🏆",
];

const LazyQuotes = () => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const styles = createVibesStyles(colors, currentVibe);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    Haptics.selectionAsync();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <View style={styles.quotesHeader}>
        <Text style={styles.sectionTitle}>Daily Motivation 💭</Text>
        <TouchableOpacity onPress={getRandomQuote} activeOpacity={0.8}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={styles.refreshButton}
          >
            <Ionicons name="refresh" size={16} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Text style={styles.quote}>"{currentQuote}"</Text>
    </LinearGradient>
  );
};

export default LazyQuotes;
