"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Menu from "./SidebarMenu";
import SidebarToggle from "./SidebarToggle";
import { useSidebar } from "@/store/useSidebar";
import MainLogo from "../MainLogo";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-custom-generic-white",
        !isOpen ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            !isOpen ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <MainLogo variant={isOpen ? "lg" : "sm"} />
          </Link>
        </Button>
        <Menu isOpen={isOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
