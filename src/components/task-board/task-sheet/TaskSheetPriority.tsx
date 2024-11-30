import { Flag } from "lucide-react";
import React from "react";
import LabelBadge from "./LabelBadge";
import TaskPriority from "../TaskPriority";
import RemovePropertyButton from "./RemovePropertyButton";
import { useTaskStore } from "@/store/useTaskStore";

const TaskSheetPriority = ({ taskId }: { taskId: string }) => {
  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <div className="grid grid-cols-2">
      <LabelBadge label="Priority" icon={Flag} />
      <div className="flex items-center gap-2">
        <TaskPriority task={task} />
        {task.priority && (
          <RemovePropertyButton taskId={task.id} property="priority" />
        )}
      </div>
    </div>
  );
};

export default TaskSheetPriority;
