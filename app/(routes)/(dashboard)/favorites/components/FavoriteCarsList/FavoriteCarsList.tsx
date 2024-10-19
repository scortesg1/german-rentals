"use client";

import React, { useEffect } from "react";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import { useLovedCars } from "@/hooks/useLovedCars";
import AddReservationModal from "@/components/shared/AddReservationModal/AddReservationModal";
import { db } from "@/lib/db";

export default function FavoriteCarsList() {
  const { addFavoriteCar, favoriteCars, verifyCars, removeFavoriteCar } =
    useLovedCars();

  useEffect(() => {
    const fetchAndVerifyCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/car");
        const cars = await response.json();

        // Ejecutar verifyCars con los datos obtenidos
        verifyCars(cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchAndVerifyCars();
  }, [verifyCars]);

  return (
    <>
      {favoriteCars.length === 0 ? (
        <p className="mt-8 text-xl text-white">
          You don't have any favorite cars yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 my-4 lg:grid-cols-3 2xl:grid-cols-4">
          {favoriteCars.map((car: Car) => {
            const {
              pricePerDay,
              photo,
              hp,
              fuel,
              id,
              people,
              name,
              transmission,
              type,
            } = car;

            const likedCar = favoriteCars.some((item) => item.id === car.id);

            return (
              <div
                key={id}
                className="bg-zinc-700 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center h-40 sm:h-52 rounded-t-lg ">
                  <Image
                    src={photo}
                    alt={name}
                    width={400}
                    height={600}
                    className="w-3/4 lg:w-full px-1 mx-auto"
                  />
                </div>
                <div className="p-6 py-5">
                  <div className="flex flex-col sm:mb-3 gap-y-2 gap-x-4 text-white">
                    <p className="text-3xl font-bold text-teal-500 lg:min-h-fit">
                      {name}
                    </p>
                    <p>{pricePerDay}$ /day</p>
                  </div>
                  <p className="flex items-center text-white mt-5">
                    <Gem className="h-4 w-4 mr-2" />
                    {type}
                  </p>
                  <p className="flex items-center text-white">
                    <Wrench className="h-4 w-4 mr-2" />
                    {transmission}
                  </p>
                  <p className="flex items-center text-white">
                    <Users className="h-4 w-4 mr-2" />
                    {people}
                  </p>
                  <p className="flex items-center text-white">
                    <Fuel className="h-4 w-4 mr-2" />
                    {fuel}
                  </p>
                  <p className="flex items-center text-white">
                    <Gauge className="h-4 w-4 mr-2" />
                    {hp}HP
                  </p>

                  <div className="flex items-center justify-center gap-x-3 mt-5">
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
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
