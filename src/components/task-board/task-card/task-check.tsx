import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskCheck = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();
  return (
    <input
      type="checkbox"
      checked={task.status === "Completed"}
      onChange={(e) => updateProperty(task.id, "status", "Completed")}
    />
  );
};

export default TaskCheck;
