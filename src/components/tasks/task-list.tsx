"use client";
import { useTaskActions } from "@/hooks/use-task-actions";
import { useTaskStore } from "@/store/use-task-store";
import React from "react";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const { removeTask, updateStatus } = useTaskActions();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.priority}</p>
          <button onClick={() => updateStatus(task.id, "completed")}>
            Set Complete
          </button>
          <button onClick={() => updateStatus(task.id, "in-progress")}>
            Set In Progress
          </button>
          <button onClick={() => updateStatus(task.id, "pending")}>
            Set Pending
          </button>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
