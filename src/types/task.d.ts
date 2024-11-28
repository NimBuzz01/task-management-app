export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus = "Todo" | "In Progress" | "Completed";

export interface Task {
  id: string;
  status: TaskStatus;
  name?: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: Date;
  assignee?: Assignee;
}
