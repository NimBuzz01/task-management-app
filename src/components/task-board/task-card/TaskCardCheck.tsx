import { cn } from "@/lib/utils";
import { Task } from "@/types/task";
import { CircleCheck } from "lucide-react";
import React from "react";

const TaskCardCheck = ({ task }: { task: Task }) => {
  return (
    <CircleCheck
      className={cn(
        "w-full h-full max-w-6 max-h-6",
        task.status === "Completed"
          ? "fill-custom-status-success-500 text-custom-generic-white "
          : "text-custom-dark-500"
      )}
    />
  );
};

export default TaskCardCheck;
