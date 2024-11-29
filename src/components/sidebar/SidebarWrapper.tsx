"use client";
import React from "react";
import Sidebar from ".";
import { cn } from "@/lib/utils";
import ContentLayout from "../ContentLayout";
import { useSidebar } from "@/store/useSidebar";

interface SidebarWrapperProps {
  children: React.ReactNode;
}

const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
  const isOpen = useSidebar((state) => state.isOpen);

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen bg-custom-generic-white-bg transition-[margin-left] ease-in-out duration-300",
          !isOpen ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <ContentLayout>{children}</ContentLayout>
      </main>
    </>
  );
};

export default SidebarWrapper;
