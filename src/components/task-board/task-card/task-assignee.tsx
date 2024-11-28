import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useTaskActions } from "@/hooks/use-task-actions";
import { cn } from "@/lib/utils";
import { useAssigneeStore } from "@/store/use-assignee-store";
import { Task } from "@/types/task";
import { UserIcon } from "lucide-react";
import Image from "next/image";

const TaskAssignee = ({ task }: { task: Task }) => {
  const assignees = useAssigneeStore((state) => state.assignees);
  const { updateProperty } = useTaskActions();

  return (
    <Select
      value={task.assignee?.id}
      onValueChange={(value) =>
        updateProperty(
          task.id,
          "assignee",
          assignees.find((a) => a.id === value)
        )
      }
    >
      <SelectTrigger
        className={cn(
          "min-h-10 min-w-10 h-max border-custom-dark-100 rounded-full w-max p-0",
          task.assignee ? "border-solid" : "border-dashed"
        )}
      >
        {task.assignee ? (
          <Avatar className="w-full h-full">
            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.name[0]}</AvatarFallback>
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

export default TaskAssignee;
