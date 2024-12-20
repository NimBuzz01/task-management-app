import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useTaskActions } from "@/hooks/useTaskActions";
import { cn } from "@/lib/utils";
import { useAssigneeStore } from "@/store/useAssigneeStore";
import { useTaskStore } from "@/store/useTaskStore";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TaskAssignee = ({
  taskId,
  isEditable = false,
}: {
  taskId: string;
  isEditable?: boolean;
}) => {
  const assignees = useAssigneeStore((state) => state.assignees);
  const { updateTaskProperty } = useTaskActions();

  const task = useTaskStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <Select
      value={task.assignee?.id}
      onValueChange={(value) =>
        updateTaskProperty(
          task.id,
          "assignee",
          assignees.find((a) => a.id === value)
        )
      }
    >
      <SelectTrigger
        className={cn(
          "relative h-10 w-10 border-custom-dark-100 rounded-full p-0",
          task.assignee ? "border-solid" : "border-dashed",
          !task.isTemporary && !isEditable
            ? "pointer-events-none cursor-default"
            : ""
        )}
      >
        {task.assignee ? (
          <Avatar className="w-full h-full">
            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.name}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="w-10 h-10">
            <UserIcon className="w-full h-full p-2.5 text-custom-dark-300" />
          </div>
        )}
      </SelectTrigger>

      <SelectContent>
        {assignees.map((assignee) => (
          <SelectItem key={assignee.id} value={assignee.id}>
            <div className="flex items-center gap-2 w-full">
              <Image
                src={assignee.avatar}
                alt={assignee.name}
                width={30}
                height={30}
              />
              <p className="body-b1 text-custom-dark-500">{assignee.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default React.memo(TaskAssignee);
