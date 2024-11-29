import React from "react";
import TaskCheck from "./task-check";
import TaskName from "./task-name";
import { Task } from "@/types/task";
import TaskPriority from "./task-priority";
import TaskAssignee from "./task-assignee";
import TaskDate from "./task-date";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTaskSheet } from "@/store/use-task-sheet-store";

const TaskCardContent = ({ task }: { task: Task }) => {
  const { setTask, setIsOpen } = useTaskSheet();

  const handleClick = () => {
    setTask(task);
    setIsOpen(true);
  };

  return (
    <Card className="bg-custom-generic-white" onClick={handleClick}>
      <div className="p-3 inline-flex w-full items-center">
        <TaskCheck task={task} />
        <TaskName task={task} />
      </div>
      <Separator />
      <div className="p-2 flex items-center gap-2">
        <TaskAssignee task={task} />
        <TaskDate task={task} />
        <div className="ml-auto">
          <TaskPriority task={task} />
        </div>
      </div>
    </Card>
  );
};

export default TaskCardContent;
