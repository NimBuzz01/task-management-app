import { useTaskActions } from "@/hooks/use-task-actions";
import { useAssigneeStore } from "@/store/use-assignee-store";
import { Task } from "@/types/task";

const TaskAssignee = ({ task }: { task: Task }) => {
  const assignees = useAssigneeStore((state) => state.assignees);
  const { updateProperty } = useTaskActions();

  return (
    <select
      value={task.assignee}
      onChange={(e) => updateProperty(task.id, "assignee", e.target.value)}
    >
      <option value="">Unassigned</option>
      {assignees.map((assignee) => (
        <option key={assignee.id} value={assignee.id}>
          {assignee.name}
        </option>
      ))}
    </select>
  );
};

export default TaskAssignee;
