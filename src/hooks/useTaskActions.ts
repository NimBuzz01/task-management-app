import { useTaskStore } from "@/store/useTaskStore";

export const useTaskActions = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskProperty,
    setActiveTask,
  } = useTaskStore();

  const clearEmptyTasks = () => {
    const emptyTasks = tasks.filter(
      (task) => !task.name && !task.priority && !task.assignee && !task.dueDate
    );
    emptyTasks.forEach((task) => deleteTask(task.id));
  };

  return {
    addTask,
    updateTask,
    deleteTask,
    updateTaskProperty,
    setActiveTask,
    clearEmptyTasks,
  };
};
