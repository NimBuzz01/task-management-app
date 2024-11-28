import { Assignee } from "@/types/assignee";
import { Task, TaskPriority, TaskStatus } from "@/types/task";
import { nanoid } from "nanoid";

export const generateTask = (
  status: TaskStatus = "To Do",
  name?: string,
  description?: string,
  priority?: TaskPriority,
  dueDate?: Date,
  assignee?: Assignee
): Task => ({
  id: nanoid(),
  status,
  name,
  description,
  priority,
  dueDate,
  assignee,
});
