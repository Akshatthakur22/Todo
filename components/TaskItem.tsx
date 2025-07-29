import { createHomeStyles } from "@/assets/styles/home.styles";
import { Task, useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const { toggleTask, deleteTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const styles = createHomeStyles(colors, currentVibe);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    Alert.alert("Delete Task?", "this task will be gone forever... 😢", [
      { text: "nah, keep it", style: "cancel" },
      {
        text: "yep, bye bye",
        style: "destructive",
        onPress: () => deleteTask(task.id),
      },
    ]);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      updateTask(task.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.taskItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={
            task.completed ? colors.gradients.success : colors.gradients.empty
          }
          style={styles.checkboxInner}
        >
          {task.completed && (
            <Ionicons name="checkmark" size={18} color="#fff" />
          )}
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.taskContent}>
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editText}
              onChangeText={setEditText}
              autoFocus
              multiline
              maxLength={200}
            />
            <View style={styles.editActions}>
              <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={styles.editButton}
                >
                  <Ionicons name="checkmark" size={16} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.danger}
                  style={styles.editButton}
                >
                  <Ionicons name="close" size={16} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <Text
              style={[
                styles.taskText,
                task.completed && styles.taskTextCompleted,
              ]}
            >
              {task.text}
            </Text>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={handleEdit} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.warning}
                  style={styles.actionButton}
                >
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.danger}
                  style={styles.actionButton}
                >
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

export default TaskItem;
