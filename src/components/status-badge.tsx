import React from "react";
import { TaskStatus } from "@/types/task";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const StatusBadge = ({
  status,
  variant = "lg",
}: {
  status: TaskStatus;
  variant?: "lg" | "sm";
}) => {
  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case "To Do":
        return "text-custom-status-warning-500";
      case "In Progress":
        return "text-custom-status-info-500";
      default:
        return "text-custom-status-success-500";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Circle
        className={cn(
          variant === "lg" ? "w-6 h-6" : "w-5 h-5",
          getStatusColor(status)
        )}
      />
      <span
        className={cn(
          variant === "lg" ? "body-b2" : "body-b1",
          "font-semibold"
        )}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
