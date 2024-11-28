import { Task } from "@/types/task";
import { Circle } from "lucide-react";
import React from "react";
import LabelBadge from "./label-badge";

const TaskSheetStatus = ({ task }: { task: Task }) => {
  return (
    <div>
      <LabelBadge label="Status" icon={Circle} />
    </div>
  );
};

export default TaskSheetStatus;
