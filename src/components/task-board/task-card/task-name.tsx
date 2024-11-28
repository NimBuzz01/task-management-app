import { Input } from "@/components/ui/input";
import { useTaskActions } from "@/hooks/use-task-actions";
import { Task } from "@/types/task";
import React from "react";

const TaskName = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();

  return (
    <Input
      value={task.name || ""}
      onChange={(e) => updateProperty(task.id, "name", e.currentTarget.value)}
      aria-label="Task name"
      placeholder="Write a task name"
      className="w-full border-none outline-none !body-b2 focus:outline-none focus:ring-0 shadow-none focus-visible:ring-transparent"
    />
  );
};

export default TaskName;
