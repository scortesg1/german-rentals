"use client";

import React, { useEffect, useState } from "react";
import { FilterProps } from "./Filters.props";
import PublicCarList from "../PublicCarList/PublicCarList";
import { Car } from "@prisma/client";
import CarFilters from "../CarFilters/CarFilters";

export default function Filters(props: FilterProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    people: "",
    fuel: "",
  });

  useEffect(() => {
    if (!cars || !filters) {
      return; // Si 'cars' o 'filters' no están definidos, se sale del efecto
    }

    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }

    if (filters.fuel) {
      filtered = filtered.filter((car) =>
        car.fuel.toLowerCase().includes(filters.fuel.toLowerCase())
      );
    }

    if (filters.people) {
      filtered = filtered.filter((car) =>
        car.people.toLowerCase().includes(filters.people.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      people: "",
      fuel: "",
    });
  };

  return (
    <div>
      <CarFilters
        setFilters={handleFilterChange}
        filters={filters}
        clearFilters={clearFilters}
      />
      <PublicCarList cars={filteredCars} />
    </div>
  );
}
