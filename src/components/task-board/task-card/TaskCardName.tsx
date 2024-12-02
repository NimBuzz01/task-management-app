import { Input } from "@/components/ui/input";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { useTaskActions } from "@/hooks/useTaskActions";
import { useTaskStore } from "@/store/useTaskStore";
import React from "react";

const TaskCardName = ({ taskId }: { taskId: string }) => {
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

  if (task.isTemporary) {
    return (
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Task name"
        placeholder="Write a task name"
        className="w-full border-none outline-none !font-semibold !body-b1 2xl:!body-b2 focus:outline-none focus:ring-0 shadow-none focus-visible:ring-transparent"
      />
    );
  }

  return (
    <p className="!body-b1 2xl:!body-b2 !font-semibold ml-2">{task.name}</p>
  );
};

export default React.memo(TaskCardName);
