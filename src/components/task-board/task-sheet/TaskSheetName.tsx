import { Input } from "@/components/ui/input";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { useTaskActions } from "@/hooks/useTaskActions";
import { useTaskStore } from "@/store/useTaskStore";
import React from "react";

const TaskSheetName = ({ taskId }: { taskId: string }) => {
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  const [name, setName] = useDebouncedState(task?.name || "", (newValue) => {
    if (task) {
      updateTaskProperty(task.id, "name", newValue);
    }
  });

  if (!task) return null;

  return (
    <Input
      value={name}
      onChange={(e) => setName(e.target.value)}
      aria-label="Task name"
      placeholder="Write a task name"
      className="!body-b2"
    />
  );
};

export default TaskSheetName;
