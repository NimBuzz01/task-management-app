import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SidebarStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useSidebar = create(
  persist<SidebarStore>(
    (set) => ({
      isOpen: true,
      setIsOpen: (isOpen: boolean) => {
        set({ isOpen });
      },
    }),
    {
      name: "sidebar-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
