"use server";

import { Car } from "@prisma/client";
import { calculateDaysBetween } from "../CalendarSelector/helpers/calculateDaysBetween";
import { DateRange } from "react-day-picker";
import MercadoPagoConfig, { Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const onReserveCar = async (car: Car, selectedDate: DateRange) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
  });
  const userId = auth();

  if(!userId){
    return
  }

  const totalDays = calculateDaysBetween(selectedDate.from!, selectedDate.to!);
  const totalPrice = totalDays * Number(car.pricePerDay);
  console.log("[TOTAL PRICE] ", totalPrice);


  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: car.id,
          title: car.name + " Reservation",
          description: `Rental of ${car.name} for ${totalDays} at BMW Rentals.`,
          quantity: 1,
          unit_price: totalPrice,
          currency_id: "USD",
        },
      ],
      back_urls: {
        success: process.env.BASE_URL + "/order-success",
        pending: process.env.BASE_URL + "/order-pending",
        failure: process.env.BASE_URL + "/order-error",
      },
      metadata: {
        carId: car.id,
        carModel: car.name,
        startDate: selectedDate.from,
        endDate: selectedDate.to,
        totalAmount: totalPrice,
        userId: userId,
      },
      notification_url: process.env.PROD_URL + "/api/payment",
    },
  });

  redirect(preference.init_point!);
};
