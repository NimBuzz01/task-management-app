import { cn } from "@/lib/utils";
import { TaskStatus } from "@/types/task";
import { CircleCheck } from "lucide-react";
import React from "react";

const TaskCardCheck = ({ status }: { status: TaskStatus }) => {
  return (
    <CircleCheck
      className={cn(
        "w-full h-full max-w-6 max-h-6",
        status === "Completed"
          ? "fill-custom-status-success-500 text-custom-generic-white "
          : "text-custom-dark-500"
      )}
    />
  );
};

export default TaskCardCheck;
