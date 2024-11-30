import { Button } from "@/components/ui/button";
import { useTaskActions } from "@/hooks/useTaskActions";
import { Task } from "@/types/task";
import { X } from "lucide-react";
import React from "react";

const RemovePropertyButton = ({
  taskId,
  property,
}: {
  taskId: string;
  property: keyof Task;
}) => {
  const { updateProperty } = useTaskActions();
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => updateProperty(taskId, property, null)}
    >
      <X className="w-8 h-8 text-custom-dark-300" />
    </Button>
  );
};

export default RemovePropertyButton;
