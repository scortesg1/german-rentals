import React from "react";
import { CarsListProps } from "./CarsList.types";
import CarCard from "./CarCard/CarCard";

export default function CarsList(props: CarsListProps) {
  const { cars } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 my-4 lg:grid-cols-3 2xl:grid-cols-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
