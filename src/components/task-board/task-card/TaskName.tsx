import { Input } from "@/components/ui/input";
import { useTaskActions } from "@/hooks/useTaskActions";
import { Task } from "@/types/task";
import React from "react";

const TaskName = ({ task, disabled }: { task: Task; disabled: boolean }) => {
  const { updateProperty } = useTaskActions();

  return disabled ? (
    <p className="!body-b2 !font-semibold ml-2">{task.name}</p>
  ) : (
    <Input
      value={task.name || ""}
      onChange={(e) => updateProperty(task.id, "name", e.currentTarget.value)}
      aria-label="Task name"
      placeholder="Write a task name"
      className="w-full border-none outline-none !font-semibold !body-b2 focus:outline-none focus:ring-0 shadow-none focus-visible:ring-transparent"
    />
  );
};

export default TaskName;
