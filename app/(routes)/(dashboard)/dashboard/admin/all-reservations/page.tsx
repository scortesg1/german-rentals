import React from "react";
import ReservationsAdminTable from "./components/ReservationsAdminTable/ReservationsAdminTable";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function ReservesPage() {
  const { userId, orgRole } = auth();
  if (!userId) {
    return redirect("/");
  }
  if (orgRole !== "org:admin") {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold text-white">All Reservations</h2>
      <ReservationsAdminTable />
    </div>
  );
}
