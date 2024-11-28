import { useTaskStore } from "@/store/use-task-store";
import { Task, TaskStatus } from "../types/task";

export const useTaskActions = () => {
  const { addTask, updateTask, deleteTask, updateTaskStatus } = useTaskStore();

  const createTask = (task: Task) => {
    addTask(task);
  };

  const modifyTask = (task: Task) => {
    updateTask(task);
  };

  const removeTask = (taskId: string) => {
    deleteTask(taskId);
  };

  const updateStatus = (taskId: string, status: TaskStatus) => {
    updateTaskStatus(taskId, status);
  };

  return { createTask, modifyTask, removeTask, updateStatus };
};
