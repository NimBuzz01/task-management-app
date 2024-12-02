import { getDateStatusText } from "@/lib/utils/task-utils";
import { Clock } from "lucide-react";
import React from "react";

const TaskCardDateText = ({ dueDate }: { dueDate: Date }) => {
  return (
    <div className="text-custom-dark-400  px-4 p-3 inline-flex items-center gap-2 border-t w-full">
      <Clock className="w-4 h-4" />
      <p className="!caption-c1">{getDateStatusText(dueDate)}</p>
    </div>
  );
};

export default TaskCardDateText;
