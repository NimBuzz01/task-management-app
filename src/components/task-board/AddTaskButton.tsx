import { Button } from "@/components/ui/button";
import { useTaskActions } from "@/hooks/useTaskActions";
import { cn } from "@/lib/utils";
import { generateTask } from "@/lib/utils/task-utils";
import { TaskStatus } from "@/types/task";
import { Plus } from "lucide-react";
import React from "react";

const AddTaskButton = ({
  status,
  variant = "default",
  className,
}: {
  status: TaskStatus;
  variant?: "default" | "icon";
  className?: string;
}) => {
  const { addTask, clearEmptyTasks } = useTaskActions();
  const newTask = generateTask(status);

  const handleClick = () => {
    addTask(newTask);
    clearEmptyTasks();
  };

  return (
    <Button
      size={variant === "icon" ? "icon" : "default"}
      variant="ghost"
      className={cn("text-custom-dark-300", className)}
      onClick={handleClick}
    >
      <Plus /> {variant === "default" && "Add Task"}
    </Button>
  );
};

export default AddTaskButton;
