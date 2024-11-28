"use client";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import React from "react";
import Sidebar from ".";
import { cn } from "@/lib/utils";
import ContentLayout from "../content-layout";

interface SidebarWrapperProps {
  children: React.ReactNode;
}

const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { getOpenState } = sidebar;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen bg-custom-generic-white-bg transition-[margin-left] ease-in-out duration-300",
          !getOpenState() ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <ContentLayout>{children}</ContentLayout>
      </main>
    </>
  );
};

export default SidebarWrapper;
