import { cn } from "@/lib/utils";
import { useTaskStore } from "@/store/use-task-store";
import { TaskStatus } from "@/types/task";
import { Circle } from "lucide-react";

const StatusHeader = ({ status }: { status: TaskStatus }) => {
  const tasks = useTaskStore((state) => state.tasks);

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case "Todo":
        return "text-custom-status-warning-500";
      case "In Progress":
        return "text-custom-status-info-500";
      default:
        return "text-custom-status-success-500";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Circle className={cn("w-6 h-6", getStatusColor(status))} />
      <span className="body-b2 font-semibold">{status}</span>
      <span className="text-custom-primary-500 bg-custom-primary-50 p-0.5 px-2 caption-c1 font-semibold rounded-full">
        {tasks.filter((task) => task.status === status).length}
      </span>
    </div>
  );
};

export default StatusHeader;
