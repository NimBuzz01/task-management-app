import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskDate = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();

  const formatDate = (date: Date | string | null | undefined) => {
    if (!date) return "";
    if (date instanceof Date) {
      return date.toISOString().split("T")[0];
    }
    return String(date).split("T")[0];
  };

  return (
    <input
      value={formatDate(task.dueDate)}
      type="date"
      onChange={(e) =>
        updateProperty(task.id, "dueDate", new Date(e.target.value))
      }
    />
  );
};

export default TaskDate;
