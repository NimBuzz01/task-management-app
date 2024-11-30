import { Assignee } from "@/types/assignee";
import { Task, TaskPriority, TaskStatus } from "@/types/task";
import { isToday, isAfter, differenceInDays, isTomorrow } from "date-fns";
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

const getCurrentDate = () => new Date();

export const getDateStatusStyles = (date: Date): string => {
  const dueDate = new Date(date);
  const currentDate = getCurrentDate();

  if (isToday(dueDate)) {
    return "text-custom-status-warning-500 bg-custom-status-warning-50 border-none";
  } else if (
    isAfter(dueDate, currentDate) &&
    differenceInDays(dueDate, currentDate) <= 7
  ) {
    return "text-custom-status-info-500 bg-custom-status-info-50 border-none";
  } else if (differenceInDays(dueDate, currentDate) < 0) {
    return "text-custom-status-danger-500 bg-custom-status-danger-50 border-none";
  }

  return "";
};

export const getDateStatusText = (date: Date): string | null => {
  const dueDate = new Date(date);
  const currentDate = getCurrentDate();

  if (isToday(dueDate)) {
    return "Should complete today";
  } else if (isTomorrow(dueDate)) {
    return "Should complete tomorrow";
  } else if (
    isAfter(dueDate, currentDate) &&
    differenceInDays(dueDate, currentDate) <= 7
  ) {
    const daysLeft = differenceInDays(dueDate, currentDate);
    return `Should complete within ${daysLeft} day${daysLeft > 1 ? "s" : ""}`;
  } else if (differenceInDays(dueDate, currentDate) < 0) {
    const daysOverdue = Math.abs(differenceInDays(dueDate, currentDate));
    return daysOverdue === 1
      ? "Should’ve completed yesterday"
      : `Should’ve completed ${daysOverdue} days ago`;
  }

  return null;
};

export const isWithinWeekRange = (date: Date): boolean => {
  const currentDate = getCurrentDate();
  const daysDifference = differenceInDays(date, currentDate);

  return daysDifference >= -7 && daysDifference <= 7;
};
