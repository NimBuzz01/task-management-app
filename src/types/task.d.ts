// Priority levels
export type TaskPriority = "low" | "medium" | "high";

// Task status
export type TaskStatus = "To Do" | "In Progress" | "Completed";

export interface Task {
  id: string;
  status: TaskStatus;
  name?: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: Date;
  assignee?: Assignee;
  isTemporary: boolean;
}
