import DeleteTask from "./delete-task";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MarkCompleteButton from "./mark-complete-button";
import { useTaskSheet } from "@/store/use-task-sheet-store";
import React, { useCallback } from "react";
import TaskSheetName from "./task-sheet-name";
import TaskSheetStatus from "./task-sheet-status";
import TaskSheetDate from "./task-sheet-date";
import TaskSheetAssignee from "./task-sheet-assignee";
import TaskSheetPriority from "./task-sheet-priority";
import TaskSheetDescription from "./task-sheet-description";

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
          <TaskSheetStatus task={task} />
          <TaskSheetDate task={task} />
          <TaskSheetAssignee task={task} />
          <TaskSheetPriority task={task} />
        </div>
        <TaskSheetDescription task={task} />
      </div>
    </div>
  );
};

export default TaskSheetContent;
