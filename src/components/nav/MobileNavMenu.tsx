import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import SidebarMenu from "../sidebar/SidebarMenu";
import MainLogo from "../MainLogo";

const MobileNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-max flex flex-col" side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <MainLogo />
            </Link>
          </Button>
        </SheetHeader>
        <SidebarMenu isOpen />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
