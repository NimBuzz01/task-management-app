import React, { useEffect } from "react";
import TaskCheck from "./TaskCardCheck";
import TaskName from "./TaskCardName";
import { Task } from "@/types/task";
import TaskPriority from "../TaskPriority";
import TaskAssignee from "../TaskAssignee";
import TaskDate from "./TaskCardDate";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTaskSheet } from "@/store/useTaskSheet";
import { isWithinWeekRange } from "@/lib/task-utils";
import TaskDateText from "./TaskCardDateText";
import TaskDescription from "./TaskCardDescription";
import { useTaskActions } from "@/hooks/useTaskActions";

const isTaskReady = (task: Task) => {
  return task.name && task.assignee && task.dueDate && task.priority;
};

const TaskCardContent = ({ task }: { task: Task }) => {
  const { setTask, setIsOpen } = useTaskSheet();
  const { updateTaskProperty } = useTaskActions();

  useEffect(() => {
    if (task.isTemporary && isTaskReady(task)) {
      updateTaskProperty(task.id, "isTemporary", false);
    }
  }, [task, updateTaskProperty]);

  const handleClick = () => {
    if (!task.isTemporary) {
      setTask(task);
      setIsOpen(true);
    }
  };

  return (
    <Card
      className="bg-custom-generic-white cursor-pointer"
      onClick={handleClick}
    >
      <div className="p-3 flex items-center w-full">
        <TaskCheck status={task.status} />
        <TaskName taskId={task.id} />
      </div>
      <Separator />
      {task.description && (
        <div className="p-2 px-4 overflow-hidden">
          <TaskDescription description={task.description} />
        </div>
      )}
      <div className="p-2 px-4 flex items-center gap-2">
        <TaskAssignee taskId={task.id} />
        <TaskDate taskId={task.id} />
        <div className="ml-auto">
          <TaskPriority taskId={task.id} />
        </div>
      </div>
      {task.dueDate && isWithinWeekRange(task.dueDate) && (
        <TaskDateText dueDate={task.dueDate} />
      )}
    </Card>
  );
};

export default React.memo(TaskCardContent);
