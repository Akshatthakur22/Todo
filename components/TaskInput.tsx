import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const TaskInput = () => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const { addTask } = useTasks();
  const [text, setText] = useState("");
  const styles = createHomeStyles(colors, currentVibe);

  const handleSubmit = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  const placeholders = {
    chill: "what's on your mind? 🌊",
    focus: "let's get this done! 🎯",
    later: "eventually... maybe? 🐼",
  };

  return (
    <View style={styles.inputSection}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholders[currentVibe]}
          placeholderTextColor={colors.textMuted}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          multiline
          maxLength={200}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={!text.trim()}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={
              text.trim() ? colors.gradients.primary : colors.gradients.empty
            }
            style={[styles.addButton, !text.trim() && styles.addButtonDisabled]}
          >
            <Ionicons
              name="add"
              size={24}
              color={text.trim() ? "#fff" : colors.textMuted}
            />
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TaskInput;
