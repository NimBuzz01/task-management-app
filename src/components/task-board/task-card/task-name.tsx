import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskName = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();
  return (
    <input
      value={task.name}
      onChange={(e) => updateProperty(task.id, "name", e.target.value)}
      aria-label="Task name"
    />
  );
};

export default TaskName;
