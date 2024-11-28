import { DatePicker } from "@/components/ui/date-picker";
import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskDate = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();

  return (
    <DatePicker
      value={task.dueDate}
      onChange={(date) => updateProperty(task.id, "dueDate", date)}
    />
  );
};

export default TaskDate;
