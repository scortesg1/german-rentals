"use client";

import React, { useEffect, useState } from "react";

import { CalendarSelectorProps } from "./CalendarSelector.types";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { calculateDaysBetween } from "./helpers/calculateDaysBetween";

export default function CalendarSelector(props: CalendarSelectorProps) {
  const { setSelectedDate, className, pricePerDay } = props;

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setSelectedDate({
      from: date?.from,
      to: date?.to,
    });
  }, [date]);

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-2", className)}>
        {date?.from && date?.to && (
          <>
            <p className="mt-4 text-lg font-normal text-white">
              Total days:{" "}
              <span className="text-teal-400 font-bold">{daysBetween}</span>
            </p>
            <p className="mt-4 text-m text-zinc-300">
              Total price: {daysBetween * Number(pricePerDay)}$ (Tax included)
            </p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left bg-zinc-700 text-zinc-300 font-normal",
                !date && "text-zinc-300"
              )}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {""}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span className="text-white">Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full max-w-xs p-0 overflow-x-scroll pointer-events-auto max-h-[400px] sm:w-auto sm:overflow-hidden sm:max-w-none" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
