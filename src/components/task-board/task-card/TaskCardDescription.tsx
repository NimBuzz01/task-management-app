import { Task } from "@/types/task";
import React from "react";

const TaskCardDescription = ({ task }: { task: Task }) => {
  return (
    <div className="line-clamp-2 caption-c1 2xl:body-b1 text-custom-dark-400 break-words">
      {task.description}
    </div>
  );
};

export default TaskCardDescription;
