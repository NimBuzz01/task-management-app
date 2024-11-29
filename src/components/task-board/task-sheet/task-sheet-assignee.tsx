import React from "react";
import LabelBadge from "./label-badge";
import { User } from "lucide-react";
import { useTaskStore } from "@/store/use-task-store";
import TaskAssignee from "../task-card/task-assignee";
import RemovePropertyButton from "./remove-property-button";

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
