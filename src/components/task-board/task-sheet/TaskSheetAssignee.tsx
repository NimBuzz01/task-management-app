import React from "react";
import LabelBadge from "../LabelBadge";
import { User } from "lucide-react";
import TaskAssignee from "../TaskAssignee";
import RemovePropertyButton from "../RemovePropertyButton";
import { useTaskStore } from "@/store/useTaskStore";

const TaskSheetAssignee = ({ taskId }: { taskId: string }) => {
  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <div className="grid grid-cols-2">
      <LabelBadge label="Assignee" icon={User} />
      <div className="flex items-center gap-2">
        <TaskAssignee task={task} />
        {task.assignee && (
          <RemovePropertyButton taskId={task.id} property="assignee" />
        )}
      </div>
    </div>
  );
};

export default TaskSheetAssignee;
