"use client";
import { useTaskActions } from "@/hooks/use-task-actions";
import { generateTask } from "@/lib/utils/task-utils";
import React, { useState } from "react";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useTaskActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = generateTask(title, description);
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};
