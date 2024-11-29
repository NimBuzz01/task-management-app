"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menuList } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface SidebarMenuProps {
  isOpen: boolean;
}

const SidebarMenu = ({ isOpen }: SidebarMenuProps) => {
  const pathname = usePathname();

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-2 px-2">
          {menuList.map((item, index) => {
            const { href, label, icon: Icon } = item;
            const isActive = pathname === href;

            return (
              <li key={index} className="w-full">
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start h-10 mb-1 bg-custom-generic-white-bg",
                          isActive &&
                            "bg-custom-primary-500 text-custom-generic-white hover:bg-custom-primary-500"
                        )}
                        asChild
                      >
                        <Link href={href}>
                          <span className={cn(isOpen ? "mr-4" : "")}>
                            <Icon size={18} />
                          </span>
                          {isOpen && (
                            <p className="max-w-[200px] truncate body-b1">
                              {label}
                            </p>
                          )}
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    {!isOpen && (
                      <TooltipContent side="right">{label}</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </nav>
    </ScrollArea>
  );
};

export default SidebarMenu;
