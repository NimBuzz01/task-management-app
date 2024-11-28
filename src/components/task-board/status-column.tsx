import { ScrollArea } from "@/components/ui/scroll-area";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import TaskCard from "./task-card/task-card";
import { Task, TaskStatus } from "@/types/task";
import AddTaskButton from "./add-task-button";
import StatusHeader from "./status-header";

const StatusColumn = ({
  tasks,
  status,
  activeId,
}: {
  tasks: Task[];
  status: TaskStatus;
  activeId: string | null;
}) => {
  const { setNodeRef } = useDroppable({
    id: status,
  });
  return (
    <div className="p-3 space-y-4 rounded-lg border-custom-dark-100 border-2 border-dashed overflow-hidden">
      <div className="flex items-center justify-between bg-custom-generic-white p-2 px-3 rounded-md">
        <StatusHeader status={status} />
        <AddTaskButton status={status} variant="icon" />
      </div>
      <ScrollArea ref={setNodeRef} className="h-[calc(100vh-14rem)]">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              task={task}
              isDragging={activeId === task.id}
            />
          ))}
        <div className="flex justify-center my-10 ">
          <AddTaskButton status={status} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default StatusColumn;
