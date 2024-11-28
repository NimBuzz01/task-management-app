import { Task } from "@/types/task";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTaskProperty: (
    taskId: string,
    property: keyof Task,
    value: any
  ) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => {
        set((state) => ({
          tasks: [...state.tasks, task],
        }));
      },
      updateTask: (updatedTask) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        }));
      },
      updateTaskProperty: (taskId, property, value) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, [property]: value } : task
          ),
        }));
      },
      deleteTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },
    }),
    { name: "task-storage" }
  )
);
