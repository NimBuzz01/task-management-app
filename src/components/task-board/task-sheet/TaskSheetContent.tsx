import DeleteTask from "../DeleteTask";
import { ArrowRight } from "lucide-react";
import MarkCompleteButton from "../MarkCompleteButton";
import { useCallback } from "react";
import TaskSheetName from "./TaskSheetName";
import TaskSheetStatus from "./TaskSheetStatus";
import TaskSheetDate from "./TaskSheetDate";
import TaskSheetAssignee from "./TaskSheetAssignee";
import TaskSheetPriority from "./TaskSheetPriority";
import TaskSheetDescription from "./TaskSheetDescription";
import { useTaskSheet } from "@/store/useTaskSheet";
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "@/store/useTaskStore";
import { taskFormSchema } from "@/lib/utils/task-schema";
import useDebounce from "@/hooks/useDebounce";
import { Task } from "@/types/task";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const TaskSheetContent = () => {
  const { task, setIsOpen, resetTask } = useTaskSheet();

  const handleClose = useCallback(() => {
    resetTask();
    setIsOpen(false);
  }, [resetTask, setIsOpen]);

  const { updateTaskProperty } = useTaskStore();
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: task || {},
  });

  const debouncedUpdate = useDebounce(
    (id: string, property: keyof Task, value: any) => {
      updateTaskProperty(id, property, value);
    },
    300
  );

  const name = useWatch({ control: form.control, name: "name" });
  const description = useWatch({ control: form.control, name: "description" });

  useEffect(() => {
    if (name !== undefined && task) {
      debouncedUpdate(task.id, "name", name);
    }
  }, [name]);

  useEffect(() => {
    if (description !== undefined && task) {
      debouncedUpdate(task.id, "description", description);
    }
  }, [description]);

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
        <TaskSheetName {...form.register("name")} />
        <div className="space-y-6">
          <TaskSheetStatus taskId={task.id} />
          <TaskSheetDate taskId={task.id} />
          <TaskSheetAssignee taskId={task.id} />
          <TaskSheetPriority taskId={task.id} />
        </div>
        <TaskSheetDescription {...form.register("description")} />
      </div>
    </div>
  );
};

export default TaskSheetContent;
