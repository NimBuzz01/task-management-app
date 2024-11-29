import { Task } from "@/types/task";
import { create } from "zustand";

type TaskSheetStore = {
  task: Task | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setTask: (task: Task) => void;
  resetTask: () => void;
};

export const useTaskSheet = create<TaskSheetStore>((set) => ({
  isOpen: false,
  task: null,
  setIsOpen: (isOpen: boolean) => {
    set({ isOpen });
  },
  setTask: (task: Task) => {
    set({ task });
  },
  resetTask: () => {
    set({ task: null });
    set({ isOpen: false });
  },
}));
