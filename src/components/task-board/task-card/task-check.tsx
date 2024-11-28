import { cn } from "@/lib/utils";
import { Task } from "@/types/task";
import { CircleCheck } from "lucide-react";
import React from "react";

const TaskCheck = ({ task }: { task: Task }) => {
  return (
    <CircleCheck
      className={cn(
        task.status === "Completed"
          ? "fill-custom-status-success-500 text-custom-generic-white"
          : "text-custom-dark-500"
      )}
    />
  );
};

export default TaskCheck;
