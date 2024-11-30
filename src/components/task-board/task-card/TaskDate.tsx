import { DatePicker } from "@/components/ui/date-picker";
import { useTaskActions } from "@/hooks/useTaskActions";
import { Task } from "@/types/task";
import React from "react";
import { getDateStatusStyles } from "@/lib/utils/task-utils";

const TaskDate = ({ task, disabled }: { task: Task; disabled?: boolean }) => {
  const { updateProperty } = useTaskActions();

  return (
    <DatePicker
      value={task.dueDate}
      onChange={(date) => updateProperty(task.id, "dueDate", date)}
      className={task.dueDate ? getDateStatusStyles(task.dueDate) : ""}
      disabled={disabled}
    />
  );
};

export default TaskDate;
