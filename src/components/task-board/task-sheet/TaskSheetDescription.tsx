import React from "react";
import LabelBadge from "../LabelBadge";
import { FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { useTaskActions } from "@/hooks/useTaskActions";
import { useTaskStore } from "@/store/useTaskStore";

const TaskSheetDescription = ({ taskId }: { taskId: string }) => {
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  const [description, setDescription] = useDebouncedState(
    task?.description || "",
    (newValue) => {
      if (task) {
        updateTaskProperty(task.id, "description", newValue);
      }
    }
  );

  if (!task) return null;

  return (
    <div className="space-y-4">
      <LabelBadge label="Description" icon={FileText} />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Task description"
        placeholder="Write a task description"
        className="!body-b1"
        rows={10}
      />
    </div>
  );
};

export default TaskSheetDescription;
