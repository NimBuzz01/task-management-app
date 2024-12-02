import { DatePicker } from "@/components/ui/date-picker";
import { useTaskActions } from "@/hooks/useTaskActions";
import { getDateStatusStyles } from "@/lib/task-utils";
import { useTaskStore } from "@/store/useTaskStore";
import React from "react";

const TaskCardDate = ({ taskId }: { taskId: string }) => {
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <DatePicker
      value={task.dueDate}
      onChange={(date) => updateTaskProperty(task.id, "dueDate", date)}
      className={task.dueDate ? getDateStatusStyles(task.dueDate) : ""}
      disabled={!task.isTemporary}
    />
  );
};

export default React.memo(TaskCardDate);
