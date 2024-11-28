import { TaskForm } from "@/components/tasks/task-form";
import { TaskList } from "@/components/tasks/task-list";
import React from "react";

const TasksPage = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
