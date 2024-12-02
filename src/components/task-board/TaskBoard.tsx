"use client";
import React, { useCallback } from "react";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  useSensor,
} from "@dnd-kit/core";
import TaskCard from "./task-card/TaskCard";
import { TaskStatus } from "@/types/task";
import StatusColumn from "./StatusColumn";
import { useTaskStore } from "@/store/useTaskStore";
import { useTaskActions } from "@/hooks/useTaskActions";

const STATUS_COLUMNS: TaskStatus[] = ["To Do", "In Progress", "Completed"];

const TaskBoard = () => {
  const { setActiveTask, updateTaskProperty } = useTaskActions();

  const tasks = useTaskStore((state) => state.tasks);
  const activeTask = useTaskStore((state) => state.activeTask);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const handleDragStart = useCallback(
    ({ active }: DragStartEvent) => {
      const task = tasks.find((task) => task.id === active.id);
      setActiveTask(task ?? null);
    },
    [tasks, setActiveTask]
  );

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over) return;
      if (over && active.id !== over.id) {
        const activeTask = tasks.find((task) => task.id === active.id);
        const overContainer = over.id as TaskStatus;
        if (activeTask && activeTask.status !== overContainer) {
          updateTaskProperty(active.id as string, "status", overContainer);
        }
      }
      setActiveTask(null);
    },
    [tasks, updateTaskProperty, setActiveTask]
  );

  return (
    <DndContext
      sensors={[mouseSensor]}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {STATUS_COLUMNS.map((status) => (
          <StatusColumn key={status} status={status} />
        ))}
      </div>
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TaskBoard;
