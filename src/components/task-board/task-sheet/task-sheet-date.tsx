import { CalendarIcon } from "lucide-react";
import React from "react";
import LabelBadge from "./label-badge";
import { format } from "date-fns";
import { DatePicker } from "@/components/ui/date-picker";
import { useTaskActions } from "@/hooks/use-task-actions";
import { useTaskStore } from "@/store/use-task-store";
import RemovePropertyButton from "./remove-property-button";

const TaskSheetDate = ({ taskId }: { taskId: string }) => {
  const { updateProperty } = useTaskActions();

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
            <span>{format(task.dueDate, "MMM d")}</span>
            <RemovePropertyButton taskId={task.id} property="dueDate" />
          </>
        ) : (
          <>
            <DatePicker
              value={task.dueDate}
              onChange={(date) => updateProperty(task.id, "dueDate", date)}
            />
            <span className="body-b1 text-custom-dark-300">No due date</span>
          </>
        )}
      </span>
    </div>
  );
};

export default TaskSheetDate;
