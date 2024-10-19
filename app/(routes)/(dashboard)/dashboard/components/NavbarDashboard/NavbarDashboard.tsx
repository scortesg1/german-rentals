"use client";

import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { UserButton } from "@clerk/nextjs";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

export default function NavbarDashboard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b border-teal-700 gap-x-4 md:px-6">
      <div className="block xl:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="flex items-center">
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent
            aria-describedby="Main Menu"
            side="left"
            className="bg-zinc-800 text-white"
          >
            <SheetHeader>
              <VisuallyHidden.Root asChild>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden.Root>
            </SheetHeader>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
}
