import { TaskStatus } from "@/types/task";
import StatusBadge from "../status-badge";
import { useTaskStore } from "@/store/useTaskStore";

const StatusHeader = ({ status }: { status: TaskStatus }) => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="flex items-center gap-2">
      <StatusBadge status={status} />
      <span className="text-custom-primary-500 bg-custom-primary-50 p-0.5 px-2 caption-c1 font-semibold rounded-full">
        {tasks.filter((task) => task.status === status).length}
      </span>
    </div>
  );
};

export default StatusHeader;
