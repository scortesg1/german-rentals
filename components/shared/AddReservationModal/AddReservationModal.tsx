"use client"

import React, { useState } from "react";
import { AddReservationModalProps } from "./AddReservationModal.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import CalendarSelector from "./CalendarSelector/CalendarSelector";
import { addDays } from "date-fns";
import { onReserveCar } from "./actions/onReserveCar";

export default function AddReservationModal(props: AddReservationModalProps) {
  const { car } = props;

  const [selectedDate, setSelectedDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: addDays(new Date(), 5) });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full mt-3">Reserve Car</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader >
          <AlertDialogTitle className="text-white">
            Choose your preferred reservation dates
          </AlertDialogTitle>
          <AlertDialogDescription >
            <CalendarSelector
              setSelectedDate={setSelectedDate}
              pricePerDay={car.pricePerDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, selectedDate)}>
            Reserve
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
