import { CalendarIcon } from "lucide-react";
import React from "react";
import LabelBadge from "../LabelBadge";
import { format } from "date-fns";
import { DatePicker } from "@/components/ui/date-picker";
import RemovePropertyButton from "../RemovePropertyButton";
import { useTaskStore } from "@/store/useTaskStore";
import { useTaskActions } from "@/hooks/useTaskActions";
import { getDateStatusStyles } from "@/lib/task-utils";

const TaskSheetDate = ({ taskId }: { taskId: string }) => {
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <div className="grid grid-cols-2">
      <LabelBadge label="Due Date" icon={CalendarIcon} />
      <span className="body-b1 flex items-center gap-2">
        {task.dueDate ? (
          <>
            <span
              className={`py-1 rounded-md px-2 ${getDateStatusStyles(
                task.dueDate
              )}`}
            >
              {format(task.dueDate, "MMM d")}
            </span>
            <RemovePropertyButton taskId={task.id} property="dueDate" />
          </>
        ) : (
          <>
            <DatePicker
              value={task.dueDate}
              onChange={(date) => updateTaskProperty(task.id, "dueDate", date)}
            />
            <span className="body-b1 text-custom-dark-300">No due date</span>
          </>
        )}
      </span>
    </div>
  );
};

export default TaskSheetDate;
