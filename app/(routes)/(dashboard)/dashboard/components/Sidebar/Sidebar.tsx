import React from "react";
import DashboardLogo from "../DashboardLogo/DashboardLogo";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";

export default function Sidebar() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-full border-r border-teal-700">
        <DashboardLogo/>
        <SidebarRoutes/>
      </div>
    </div>
  );
}
