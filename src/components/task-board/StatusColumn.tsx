import { ScrollArea } from "@/components/ui/scroll-area";
import { useDroppable } from "@dnd-kit/core";
import React, { useMemo } from "react";
import TaskCard from "./task-card/TaskCard";
import { TaskStatus } from "@/types/task";
import AddTaskButton from "./AddTaskButton";
import StatusHeader from "./StatusHeader";
import { useTaskStore } from "@/store/useTaskStore";

const StatusColumn = ({ status }: { status: TaskStatus }) => {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  const tasks = useTaskStore((state) => state.tasks);
  const activeTask = useTaskStore((state) => state.activeTask);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.status === status);
  }, [tasks, status]);

  const placeholderIndex = useMemo(() => {
    if (isOver && activeTask && activeTask.status === status) {
      return filteredTasks.findIndex((task) => task.id === activeTask.id);
    }
    return -1;
  }, [status, isOver, activeTask, filteredTasks]);

  return (
    <div className="p-3 space-y-4 rounded-lg border-custom-dark-100 border-2 border-dashed overflow-hidden">
      <div className="flex items-center justify-between bg-custom-generic-white p-2 px-3 rounded-md">
        <StatusHeader status={status} />
        <AddTaskButton status={status} variant="icon" />
      </div>
      <ScrollArea ref={setNodeRef} className="h-[calc(100vh-14rem)]">
        <div className="flex flex-col gap-4">
          {filteredTasks.map((task, index) => (
            <React.Fragment key={task.id}>
              {isOver &&
                activeTask?.id === task.id &&
                placeholderIndex === index && (
                  <div className="opacity-50">
                    <TaskCard task={activeTask!} />
                  </div>
                )}
              <div
                className={`transition-opacity duration-200 ${
                  activeTask?.id === task.id
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <TaskCard task={task} />
              </div>
            </React.Fragment>
          ))}
          {isOver && placeholderIndex === -1 && (
            <div className="opacity-50">
              <TaskCard task={activeTask!} />
            </div>
          )}
        </div>
        <div className="flex justify-center my-10">
          <AddTaskButton status={status} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default StatusColumn;
