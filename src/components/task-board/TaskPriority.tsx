import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskActions } from "@/hooks/useTaskActions";
import { cn } from "@/lib/utils";
import { useTaskStore } from "@/store/useTaskStore";
import { TaskPriority as IPriority } from "@/types/task";
import { Dot } from "lucide-react";
import React from "react";

const TaskPriority = ({
  taskId,
  isEditable = false,
}: {
  taskId: string;
  isEditable?: boolean;
}) => {
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  const priorityStyles: Record<string, string> = {
    low: "text-custom-status-info-500 bg-custom-status-info-50",
    medium: "text-custom-status-warning-500 bg-custom-status-warning-50",
    high: "text-custom-status-danger-500 bg-custom-status-danger-50",
  };

  const triggerClasses = cn(
    "!caption-c1 border-dashed rounded-md w-max text-custom-dark-300 !body-b1",
    task.priority &&
      `${priorityStyles[task.priority]} pr-2 pl-0 !font-semibold border-none`
  );

  return (
    <Select
      value={task.priority}
      onValueChange={(value: IPriority) =>
        updateTaskProperty(task.id, "priority", value)
      }
    >
      <SelectTrigger
        className={cn(
          triggerClasses,
          !task.isTemporary &&
            !isEditable &&
            "pointer-events-none cursor-default"
        )}
      >
        {task.priority ? (
          <>
            <Dot className="size-6" />
            <SelectValue placeholder="Set priority" />
          </>
        ) : (
          "Set priority"
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default React.memo(TaskPriority);
