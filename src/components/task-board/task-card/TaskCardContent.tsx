import React from "react";
import TaskCheck from "./TaskCheck";
import TaskName from "./TaskName";
import { Task } from "@/types/task";
import TaskPriority from "./TaskPriority";
import TaskAssignee from "./TaskAssignee";
import TaskDate from "./TaskDate";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTaskSheet } from "@/store/useTaskSheet";
import { isWithinWeekRange } from "@/lib/utils/task-utils";
import TaskDateText from "./TaskDateText";
import TaskDescription from "./TaskDescription";

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
      {task.description && (
        <div className="p-2 px-4">
          <TaskDescription task={task} />
        </div>
      )}
      <div className="p-2 px-4 flex items-center gap-2">
        <TaskAssignee task={task} />
        <TaskDate task={task} />
        <div className="ml-auto">
          <TaskPriority task={task} />
        </div>
      </div>
      {task.dueDate && isWithinWeekRange(task.dueDate) && (
        <TaskDateText date={task.dueDate} />
      )}
    </Card>
  );
};

export default TaskCardContent;
