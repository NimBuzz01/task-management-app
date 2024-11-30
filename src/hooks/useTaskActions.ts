import { useTaskStore } from "@/store/useTaskStore";
import { Task } from "@/types/task";

export const useTaskActions = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskProperty,
    setActiveTask,
  } = useTaskStore();

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

  const setActive = (task: Task | null) => {
    setActiveTask(task);
  };

  const clearEmptyTasks = () => {
    const emptyTasks = tasks.filter(
      (task) => !task.name && !task.priority && !task.assignee && !task.dueDate
    );
    emptyTasks.forEach((task) => deleteTask(task.id));
  };

  return {
    createTask,
    modifyTask,
    removeTask,
    updateProperty,
    setActive,
    clearEmptyTasks,
  };
};
