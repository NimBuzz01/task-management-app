import { Task } from "@/types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Setup project",
    description: "Initialize the repository and install dependencies.",
    priority: "high",
    status: "completed",
    dueDate: new Date("2024-12-05"),
  },
  {
    id: "2",
    title: "Build sidebar",
    description: "Create a responsive sidebar with collapsible menus.",
    priority: "medium",
    status: "in-progress",
    dueDate: new Date("2024-12-05"),
  },
];
