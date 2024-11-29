import { Input } from "@/components/ui/input";
import { useTaskActions } from "@/hooks/useTaskActions";
import { Task } from "@/types/task";
import React from "react";

const TaskSheetName = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();

  return (
    <Input
      value={task.name || ""}
      onChange={(e) => updateProperty(task.id, "name", e.currentTarget.value)}
      aria-label="Task name"
      placeholder="Write a task name"
      className="!body-b2"
    />
  );
};

export default TaskSheetName;
