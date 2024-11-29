import { useTaskStore } from "@/store/useTaskStore";
import { Task } from "@/types/task";

export const useTaskActions = () => {
  const { addTask, updateTask, deleteTask, updateTaskProperty } =
    useTaskStore();

  const createTask = (task: Task) => {
    addTask(task);
  };

  const modifyTask = (task: Task) => {
    updateTask(task);
  };

  const removeTask = (taskId: string) => {
    deleteTask(taskId);
  };

  const updateProperty = (taskId: string, property: keyof Task, value: any) => {
    updateTaskProperty(taskId, property, value);
  };

  return { createTask, modifyTask, removeTask, updateProperty };
};
