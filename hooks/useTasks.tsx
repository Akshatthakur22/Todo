import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
  getStats: () => { total: number; completed: number; pending: number };
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from storage
  useEffect(() => {
    AsyncStorage.getItem("l8r_tasks").then((value) => {
      if (value) {
        const parsedTasks = JSON.parse(value).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          completedAt: task.completedAt
            ? new Date(task.completedAt)
            : undefined,
        }));
        setTasks(parsedTasks);
      }
    });
  }, []);

  // Save tasks to storage
  const saveTasks = async (newTasks: Task[]) => {
    await AsyncStorage.setItem("l8r_tasks", JSON.stringify(newTasks));
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    saveTasks(newTasks);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed ? new Date() : undefined,
          }
        : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const updateTask = (id: string, text: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: text.trim() } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
    Haptics.selectionAsync();
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, updateTask, getStats }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
