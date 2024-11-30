import React from "react";
import LabelBadge from "./LabelBadge";
import { FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const TaskSheetDescription = ({ ...props }) => {
  return (
    <div className="space-y-4">
      <LabelBadge label="Description" icon={FileText} />
      <Textarea
        {...props}
        aria-label="Task description"
        placeholder="Write a task description"
        className="!body-b1"
        rows={10}
      />
    </div>
  );
};

export default TaskSheetDescription;
