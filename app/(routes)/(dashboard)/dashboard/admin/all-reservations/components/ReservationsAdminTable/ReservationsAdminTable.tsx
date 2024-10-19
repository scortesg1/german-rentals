import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/formatPrice";

export default async function ReservationsAdminTable() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const reservations = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalAmount = reservations.reduce((acc, reservation) => {
    return acc + parseFloat(reservation.totalAmount);
  }, 0);

  return (
    <div>
      {reservations.length === 0 ? (
        <p className="text-xl text-white mt-8">You have no reservations yet.</p>
      ) : (
        <Table className="mt-10">
          <TableHeader className="bg-">
            <TableRow>
              <TableHead>Order date</TableHead>
              <TableHead>Client ID</TableHead>
              <TableHead>Car</TableHead>
              <TableHead className="w-[200px]">Start date</TableHead>
              <TableHead className="w-[200px]">End date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>
                  {reservation.createdAt.toLocaleDateString()}
                </TableCell>
                <TableCell>{reservation.userId}</TableCell>
                <TableCell className="font-medium">
                  {reservation.carModel}
                </TableCell>
                <TableCell>
                  {reservation.startDate.toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {reservation.endDate.toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div
                    className={`${
                      reservation.status === "pending" && "bg-yellow-600"
                    } ${reservation.status === "confirmed" && "bg-green-600"}
                    ${
                      reservation.status === "approved" && "bg-green-600"
                    }  text-white w-min px-3 py-2 rounded-lg pointer-events-none`}
                  >
                    {reservation.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {formatPrice(Number(reservation.totalAmount))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="hover:bg-zinc-700">
              <TableCell className="font-bold" colSpan={6}>
                Total
              </TableCell>
              <TableCell className="font-bold text-right">
                {formatPrice(totalAmount)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}
