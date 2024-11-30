import { z } from "zod";

export const taskFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.date(),
  assignee: z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string(),
  }),
});
