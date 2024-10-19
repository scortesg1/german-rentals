import React from "react";
import ReservationList from "./components/ReservationTable/ReservationTable";

export default function ReservesPage() {

  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold text-white">Reservations</h2>
      <ReservationList />
    </div>
  );
}
