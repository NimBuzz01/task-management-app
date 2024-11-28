import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskPriority = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();
  return (
    <select
      value={task.priority}
      onChange={(e) => updateProperty(task.id, "priority", e.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default TaskPriority;
