import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Assignee } from "@/types/assignee";
import { assignees } from "@/data/assignees";

interface AssigneeState {
  assignees: Assignee[];
  addAssignee: (assignee: Assignee) => void;
  updateAssignee: (updatedAssignee: Assignee) => void;
  deleteAssignee: (assigneeId: string) => void;
}

export const useAssigneeStore = create<AssigneeState>()(
  persist(
    (set) => ({
      assignees: assignees,
      addAssignee: (assignee) => {
        set((state) => ({
          assignees: [...state.assignees, assignee],
        }));
      },
      updateAssignee: (updatedAssignee) => {
        set((state) => ({
          assignees: state.assignees.map((assignee) =>
            assignee.id === updatedAssignee.id ? updatedAssignee : assignee
          ),
        }));
      },
      deleteAssignee: (assigneeId) => {
        set((state) => ({
          assignees: state.assignees.filter(
            (assignee) => assignee.id !== assigneeId
          ),
        }));
      },
    }),
    { name: "assignee-store" }
  )
);
