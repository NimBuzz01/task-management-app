import { Task } from "@/types/task";
import React from "react";

const TaskDescription = ({ task }: { task: Task }) => {
  return (
    <div className="line-clamp-2 body-b1 text-custom-dark-400">
      {task.description}
    </div>
  );
};

export default TaskDescription;
