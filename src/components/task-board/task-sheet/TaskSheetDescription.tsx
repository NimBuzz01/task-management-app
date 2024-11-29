import { Task } from "@/types/task";
import React from "react";
import LabelBadge from "./LabelBadge";
import { FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useTaskActions } from "@/hooks/use-task-actions";

const TaskSheetDescription = ({ task }: { task: Task }) => {
  const { updateProperty } = useTaskActions();
  return (
    <div className="space-y-4">
      <LabelBadge label="Description" icon={FileText} />
      <Textarea
        value={task.description || ""}
        onChange={(e) =>
          updateProperty(task.id, "description", e.currentTarget.value)
        }
        aria-label="Task description"
        placeholder="Write a task description"
        className="!body-b1"
        rows={10}
      />
    </div>
  );
};

export default TaskSheetDescription;
