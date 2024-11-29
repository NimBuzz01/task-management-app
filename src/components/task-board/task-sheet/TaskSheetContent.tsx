import DeleteTask from "./DeleteTask";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MarkCompleteButton from "./MarkCompleteButton";
import React, { useCallback } from "react";
import TaskSheetName from "./TaskSheetName";
import TaskSheetStatus from "./TaskSheetStatus";
import TaskSheetDate from "./TaskSheetDate";
import TaskSheetAssignee from "./TaskSheetAssignee";
import TaskSheetPriority from "./TaskSheetPriority";
import TaskSheetDescription from "./TaskSheetDescription";
import { useTaskSheet } from "@/store/useTaskSheet";

const TaskSheetContent = () => {
  const { task, setIsOpen, resetTask } = useTaskSheet();

  const handleClose = useCallback(() => {
    resetTask();
    setIsOpen(false);
  }, [resetTask, setIsOpen]);

  if (!task) return null;

  return (
    <div>
      <div className="flex items-center p-4 border-b border-custom-dark-50">
        <MarkCompleteButton taskId={task.id} className="mr-auto" />
        <DeleteTask taskId={task.id} />
        <Button size="icon" variant="ghost" onClick={handleClose}>
          <ArrowRight className="w-8 h-8 text-custom-dark-300" />
        </Button>
      </div>
      <div className="p-4 py-6 space-y-6">
        <TaskSheetName task={task} />
        <div className="space-y-6">
          <TaskSheetStatus taskId={task.id} />
          <TaskSheetDate taskId={task.id} />
          <TaskSheetAssignee taskId={task.id} />
          <TaskSheetPriority taskId={task.id} />
        </div>
        <TaskSheetDescription task={task} />
      </div>
    </div>
  );
};

export default TaskSheetContent;
