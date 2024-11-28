import { Task } from "@/types/task";
import { CalendarIcon } from "lucide-react";
import React from "react";
import LabelBadge from "./label-badge";

const TaskSheetDate = ({ task }: { task: Task }) => {
  return (
    <div>
      <LabelBadge label="Due Date" icon={CalendarIcon} />
    </div>
  );
};

export default TaskSheetDate;
