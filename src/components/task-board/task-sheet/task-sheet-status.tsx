import { Circle } from "lucide-react";
import React from "react";
import LabelBadge from "./label-badge";
import StatusBadge from "@/components/status-badge";
import { useTaskStore } from "@/store/use-task-store";

const TaskSheetStatus = ({ taskId }: { taskId: string }) => {
  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <div className="grid grid-cols-2">
      <LabelBadge label="Status" icon={Circle} />
      <StatusBadge status={task.status} variant="sm" />
    </div>
  );
};

export default TaskSheetStatus;
