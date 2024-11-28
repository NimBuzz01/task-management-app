import { Task } from "@/types/task";
import { nanoid } from "nanoid";

export const generateTask = (
  title: string,
  description: string = "",
  priority: "low" | "medium" | "high" = "medium",
  status: "pending" | "in-progress" | "completed" = "pending",
  dueDate?: Date
): Task => ({
  id: nanoid(),
  title,
  description,
  priority,
  status,
  dueDate,
});
