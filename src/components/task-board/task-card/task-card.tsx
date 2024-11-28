import React, { CSSProperties, memo } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Task } from "@/types/task";
import TaskCardContent from "./task-card.content";

interface TaskCardProps {
  id: string;
  task: Task;
  isDragging: boolean;
}

export default memo(function TaskCard({ id, task, isDragging }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`transition-all duration-200 cursor-move ${
        isDragging ? "opacity-0" : ""
      }`}
    >
      <TaskCardContent task={task} />
    </div>
  );
});
