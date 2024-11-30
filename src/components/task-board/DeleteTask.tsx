import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTaskActions } from "@/hooks/useTaskActions";
import { useTaskSheet } from "@/store/useTaskSheet";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

interface DeleteTaskProps {
  taskId: string;
}

const DeleteTask = ({ taskId }: DeleteTaskProps) => {
  const { removeTask } = useTaskActions();
  const { resetTask } = useTaskSheet();

  const handleDelete = async () => {
    try {
      removeTask(taskId);
      resetTask();
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Trash className="w-8 h-8 text-custom-dark-300" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
          <DialogDescription>
            This will permanently delete the selected task. This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            className="bg-custom-status-danger-500"
            onClick={handleDelete}
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTask;
