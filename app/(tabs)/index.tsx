import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import PandaAvatar from "@/components/PandaAvatar";
import TaskInput from "@/components/TaskInput";
import TaskItem from "@/components/TaskItem";
import { useTasks } from "@/hooks/useTasks";
import { useTheme } from "@/hooks/useTheme";
import { useVibes } from "@/hooks/useVibes";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colors } = useTheme();
  const { currentVibe } = useVibes();
  const { tasks } = useTasks();
  const styles = createHomeStyles(colors, currentVibe);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <TaskInput />

        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem task={item} />}
          keyExtractor={(item) => item.id}
          style={styles.taskList}
          contentContainerStyle={[
            styles.taskListContent,
            { paddingBottom: 120 }, // Space for tab bar
          ]}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />

        <PandaAvatar />
      </SafeAreaView>
    </LinearGradient>
  );
}
