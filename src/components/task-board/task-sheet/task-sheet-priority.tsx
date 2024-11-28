import { Task } from "@/types/task";
import { Flag } from "lucide-react";
import React from "react";
import LabelBadge from "./label-badge";

const TaskSheetPriority = ({ task }: { task: Task }) => {
  return (
    <div>
      <LabelBadge label="Priority" icon={Flag} />
    </div>
  );
};

export default TaskSheetPriority;
