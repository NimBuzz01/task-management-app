import { Task } from "@/types/task";
import React from "react";
import LabelBadge from "./label-badge";
import { User } from "lucide-react";

const TaskSheetAssignee = ({ task }: { task: Task }) => {
  return (
    <div>
      <LabelBadge label="Assignee" icon={User} />
    </div>
  );
};

export default TaskSheetAssignee;
