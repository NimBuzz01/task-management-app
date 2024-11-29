import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTaskSheet } from "@/store/use-task-sheet-store";
import TaskSheetContent from "./task-board/task-sheet/task-sheet-content";

const TaskSheet = () => {
  const { isOpen, task } = useTaskSheet();

  return (
    <AnimatePresence>
      {isOpen && task && (
        <motion.div
          className="fixed top-0 right-0 w-full sm:w-[438px] pt-14 z-[9] h-screen bg-custom-generic-white shadow-md"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ ease: "easeIn" }}
        >
          <TaskSheetContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskSheet;
