import React from "react";
import { SidebarItemProps } from "./SidebarItem.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { href, icon: Icon, label } = item;

  const pathname = usePathname();

  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-white text-sm items-center hover:bg-teal-600 p-2 rounded-lg cursor-pointer transition-colors duration-300`, activePath && "bg-teal-600"
      )}
    >
      <Icon className="h-5 w-5 " strokeWidth={1} />
      {label}
    </Link>
  );
}
