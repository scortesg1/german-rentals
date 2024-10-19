"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { adminSidebarData, generalSidebarData } from "./SidebarRoutes.data";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function SidebarRoutes() {
  const { orgRole } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-white font-bold uppercase">General</p>
          {generalSidebarData.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        {orgRole === "org:admin" && (
          <>
            <Separator />
            <div className="p-2 md:p-6">
              <p className="mb-2 text-white font-bold uppercase">Admin</p>
              {adminSidebarData.map((item) => (
                <SidebarItem key={item.label} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <Separator className="border-teal-700" />
        <footer className="py-3 my-3 text-center text-white">
          {new Date().getFullYear()} by{" "}
          <a
            href="https://github.com/scortesg1"
            target="_blank"
            className="text-teal-500 font-semibold"
          >
            Santiago Cortés
          </a>
        </footer>
      </div>
    </div>
  );
}
