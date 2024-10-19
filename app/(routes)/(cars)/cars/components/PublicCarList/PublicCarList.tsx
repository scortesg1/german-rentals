"use client";

import React from "react";
import {
  Download,
  Fuel,
  Gauge,
  Gem,
  Upload,
  Users,
  Wrench,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddReservationModal from "@/components/shared/AddReservationModal/AddReservationModal";
import { useLovedCars } from "@/hooks/useLovedCars";
import { PublicCarListProps } from "./PublicCarList.types";
import { Car } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import CarsSkeleton from "@/components/shared/CarsSkeleton/CarsSkeleton";

export default function PublicCarList(props: PublicCarListProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addFavoriteCar, favoriteCars, removeFavoriteCar } = useLovedCars();

  if (!cars) {
    return <CarsSkeleton/>;
  }

  return (
    <>
      {cars.length === 0 && <p className="text-white text-base lg:text-lg mt-10">No vehicles match the given specifications.</p>}
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4 mt-10">
        {cars.map((car: Car) => {
          const likedCar = favoriteCars.some((item) => item.id === car.id);

          return (
            <div
              key={car.id}
              className="bg-zinc-700 h-min rounded-lg transition-all duration-300"
            >
              <div className="flex items-center h-40 sm:h-52 rounded-t-lg ">
              <Image
                src={car.photo}
                alt={car.name}
                width={400}
                height={600}
                priority
                className="w-3/4 lg:w-full px-1 mx-auto"
              />
            </div>
              <div className="p-6 py-5">
                <div className="flex flex-col mb-3 gap-x-4 text-white">
                  <p
                    title={car.name}
                    className="text-3xl font-bold text-teal-500 lg:min-h-fit truncate"
                  >
                    {car.name}
                  </p>
                  <p>{car.pricePerDay}$ /day</p>
                </div>
                <p className="flex items-center text-white mt-5">
                  <Gem className="h-4 w-4 mr-2" />
                  {car.type}
                </p>
                <p className="flex items-center text-white">
                  <Wrench className="h-4 w-4 mr-2" />
                  {car.transmission}
                </p>
                <p className="flex items-center text-white">
                  <Users className="h-4 w-4 mr-2" />
                  {car.people}
                </p>
                <p className="flex items-center text-white">
                  <Fuel className="h-4 w-4 mr-2" />
                  {car.fuel}
                </p>
                <p className="flex items-center text-white">
                  <Gauge className="h-4 w-4 mr-2" />
                  {car.hp}HP
                </p>

                {userId ? (
                  <div className="flex items-center justify-center gap-x-3 sm:mt-5">
                    <AddReservationModal car={car} />
                    <Heart
                      className={`${
                        likedCar && "fill-teal-500 stroke-teal-500"
                      } mt-2 text-white hover:fill-teal-500 hover:stroke-teal-500 cursor-pointer transition-colors duration-300 hover:scale-110`}
                      onClick={
                        likedCar
                          ? () => removeFavoriteCar(car.id)
                          : () => addFavoriteCar(car)
                      }
                    />
                  </div>
                ) : (
                  <div className="w-full mt-4 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full">
                        Sign in to reserve
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
