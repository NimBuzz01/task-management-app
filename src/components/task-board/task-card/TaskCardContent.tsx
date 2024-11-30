import React, { useEffect, useState } from "react";
import TaskCheck from "./TaskCheck";
import TaskName from "./TaskName";
import { Task } from "@/types/task";
import TaskPriority from "../TaskPriority";
import TaskAssignee from "../TaskAssignee";
import TaskDate from "./TaskDate";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTaskSheet } from "@/store/useTaskSheet";
import { isWithinWeekRange } from "@/lib/utils/task-utils";
import TaskDateText from "./TaskDateText";
import TaskDescription from "./TaskDescription";

const TaskCardContent = ({ task }: { task: Task }) => {
  const { setTask, setIsOpen } = useTaskSheet();
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    setTask(task);
    setIsOpen(true);
  };

  useEffect(() => {
    if (task.name && task.assignee && task.dueDate && task.priority) {
      setDisabled(false);
    }
  }, [task]);

  return (
    <Card
      className="bg-custom-generic-white"
      onClick={disabled ? undefined : handleClick}
    >
      <div className="p-3 inline-flex w-full items-center">
        <TaskCheck task={task} />
        <TaskName task={task} disabled={!disabled} />
      </div>
      <Separator />
      {task.description && (
        <div className="p-2 px-4 overflow-hidden">
          <TaskDescription task={task} />
        </div>
      )}
      <div className="p-2 px-4 flex items-center gap-2">
        <TaskAssignee task={task} disabled={!disabled} />
        <TaskDate task={task} disabled={!disabled} />
        <div className="ml-auto">
          <TaskPriority task={task} disabled={!disabled} />
        </div>
      </div>
      {task.dueDate && isWithinWeekRange(task.dueDate) && (
        <TaskDateText date={task.dueDate} />
      )}
    </Card>
  );
};

export default TaskCardContent;
