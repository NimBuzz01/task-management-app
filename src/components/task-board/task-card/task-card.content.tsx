import React from "react";
import TaskCheck from "./task-check";
import TaskName from "./task-name";
import { Task } from "@/types/task";
import TaskPriority from "./task-priority";
import TaskAssignee from "./task-assignee";
import TaskDate from "./task-date";
import { Card } from "@/components/ui/card";

const TaskCardContent = ({ task }: { task: Task }) => {
  return (
    <Card className="p-3 bg-custom-generic-white">
      <TaskCheck task={task} />
      <TaskName task={task} />
      <TaskPriority task={task} />
      <TaskAssignee task={task} />
      <TaskDate task={task} />
    </Card>
  );
};

export default TaskCardContent;
