import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskActions } from "@/hooks/use-task-actions";
import { cn } from "@/lib/utils";
import { Task } from "@/types/task";
import { Dot } from "lucide-react";
import React from "react";

const TaskPriority = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();

  const priorityStyles: Record<string, string> = {
    low: "text-custom-status-info-500 bg-custom-status-info-50",
    medium: "text-custom-status-warning-500 bg-custom-status-warning-50",
    high: "text-custom-status-danger-500 bg-custom-status-danger-50",
  };

  return (
    <Select
      value={task.priority}
      onValueChange={(value: string) =>
        updateProperty(task.id, "priority", value)
      }
    >
      <SelectTrigger
        className={cn(
          "!caption-c1 border-dashed rounded-md",
          task.priority &&
            `${
              priorityStyles[task.priority]
            } pr-2 pl-0 !font-semibold border-none`
        )}
      >
        {task.priority && <Dot className="size-6" />}
        <SelectValue placeholder="Set priority" className="!body-b1" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TaskPriority;
