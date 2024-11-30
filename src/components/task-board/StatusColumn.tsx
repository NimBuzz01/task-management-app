import { ScrollArea } from "@/components/ui/scroll-area";
import { useDroppable } from "@dnd-kit/core";
import React, { useMemo } from "react";
import TaskCard from "./task-card/TaskCard";
import { Task, TaskStatus } from "@/types/task";
import AddTaskButton from "./AddTaskButton";
import StatusHeader from "./StatusHeader";
import { useTaskStore } from "@/store/useTaskStore";

const StatusColumn = ({
  status,
  activeId,
}: {
  status: TaskStatus;
  activeId: string | null;
}) => {
  const { setNodeRef } = useDroppable({
    id: status,
  });
  const tasks = useTaskStore((state) => state.tasks);
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.status === status);
  }, [tasks, status]);

  return (
    <div className="p-3 space-y-4 rounded-lg border-custom-dark-100 border-2 border-dashed overflow-hidden">
      <div className="flex items-center justify-between bg-custom-generic-white p-2 px-3 rounded-md">
        <StatusHeader status={status} />
        <AddTaskButton status={status} variant="icon" />
      </div>

      <ScrollArea ref={setNodeRef} className="h-[calc(100vh-14rem)]">
        <div className="flex flex-col gap-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              task={task}
              isDragging={activeId === task.id}
            />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <AddTaskButton status={status} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default StatusColumn;
