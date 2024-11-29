"use client";
import React, { useState } from "react";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import TaskCard from "./task-card/TaskCard";
import { TaskStatus } from "@/types/task";
import StatusColumn from "./StatusColumn";
import { useTaskStore } from "@/store/useTaskStore";
import { useTaskActions } from "@/hooks/useTaskActions";

const STATUS_COLUMNS: TaskStatus[] = ["To Do", "In Progress", "Completed"];

const TaskBoard = () => {
  const { updateProperty } = useTaskActions();
  const tasks = useTaskStore((state) => state.tasks);

  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (over && active.id !== over.id) {
      const activeTask = tasks.find((task) => task.id === active.id);
      const overContainer = over.id as TaskStatus;
      if (activeTask && activeTask.status !== overContainer) {
        updateProperty(active.id as string, "status", overContainer);
      }
    }
    setActiveId(null);
  };

  const activeTask = activeId
    ? tasks.find((task) => task.id === activeId)
    : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {STATUS_COLUMNS.map((status) => (
          <StatusColumn
            key={status}
            tasks={tasks}
            status={status}
            activeId={activeId}
          />
        ))}
      </div>
      <DragOverlay>
        {activeId && activeTask ? (
          <TaskCard id={activeId} task={activeTask} isDragging={false} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TaskBoard;
