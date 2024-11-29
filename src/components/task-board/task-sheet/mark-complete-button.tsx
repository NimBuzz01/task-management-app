import { Button } from "@/components/ui/button";
import { useTaskActions } from "@/hooks/use-task-actions";
import { cn } from "@/lib/utils";
import { useTaskStore } from "@/store/use-task-store";
import { CheckCircle } from "lucide-react";
import React, { useMemo } from "react";

interface MarkCompleteButtonProps {
  taskId: string;
  className?: string;
}

const MarkCompleteButton = ({ taskId, className }: MarkCompleteButtonProps) => {
  const { updateProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  const buttonClass = useMemo(
    () =>
      cn(
        "border",
        task?.status === "Completed" &&
          "text-custom-status-success-500 bg-custom-status-success-50",
        className
      ),
    [task?.status, className]
  );

  if (!task) return null;

  return (
    <Button
      variant="ghost"
      onClick={() => updateProperty(taskId, "status", "Completed")}
      className={buttonClass}
    >
      <CheckCircle />
      {task.status === "Completed" ? "Completed" : "Mark as completed"}
    </Button>
  );
};

export default MarkCompleteButton;
