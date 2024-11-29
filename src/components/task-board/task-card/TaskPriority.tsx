import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskActions } from "@/hooks/useTaskActions";
import { cn } from "@/lib/utils";
import { Task } from "@/types/task";
import { Dot } from "lucide-react";
import React from "react";

const TaskPriority = ({ task }: { task: Task }) => {
  const { id, priority } = task;
  const { updateProperty } = useTaskActions();

  const priorityStyles: Record<string, string> = {
    low: "text-custom-status-info-500 bg-custom-status-info-50",
    medium: "text-custom-status-warning-500 bg-custom-status-warning-50",
    high: "text-custom-status-danger-500 bg-custom-status-danger-50",
  };

  const triggerClasses = cn(
    "!caption-c1 border-dashed rounded-md w-max text-custom-dark-300 !body-b1",
    priority &&
      `${priorityStyles[priority]} pr-2 pl-0 !font-semibold border-none`
  );

  return (
    <Select
      value={priority}
      onValueChange={(value: string) => updateProperty(id, "priority", value)}
    >
      <SelectTrigger className={triggerClasses}>
        {priority ? (
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

export default TaskPriority;
