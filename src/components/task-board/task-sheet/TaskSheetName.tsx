import { Input } from "@/components/ui/input";
import React from "react";

const TaskSheetName = ({ ...props }) => {
  return (
    <Input
      {...props}
      aria-label="Task name"
      placeholder="Write a task name"
      className="!body-b2"
    />
  );
};

export default TaskSheetName;
