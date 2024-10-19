import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarFiltersProps } from "./CarFilters.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarFilters(props: CarFiltersProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="mt-10 mb-0 flex flex-col gap-x-5 space-y-4 md:flex-row md:space-y-0">
      <Select  onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
        <SelectTrigger className="lg:w-[180px]">
          <SelectValue placeholder="Vehicle type"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="hatchback">Hatchback</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="sport">Sport</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
            <SelectItem value="convertible">Convertible</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("transmission", value)} value={filters.transmission}>
        <SelectTrigger className="lg:w-[180px]">
          <SelectValue placeholder="Transmission"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatic">Automatic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("fuel", value)} value={filters.fuel}>
        <SelectTrigger className="lg:w-[180px]">
          <SelectValue placeholder="Car fuel"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="gas">Gas</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
        <SelectTrigger className="lg:w-[180px]">
          <SelectValue placeholder="Capacity"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters} variant="destructive">
        <Trash className="w-4 h-4 mr-2" />
        Remove filters
      </Button>
    </div>
  );
}
