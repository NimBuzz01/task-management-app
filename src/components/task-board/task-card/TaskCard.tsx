import React, { memo } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Task } from "@/types/task";
import TaskCardContent from "./TaskCardContent";

const TaskCard = memo(function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`transition-all duration-200 ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      <TaskCardContent task={task} />
    </div>
  );
});

export default TaskCard;
