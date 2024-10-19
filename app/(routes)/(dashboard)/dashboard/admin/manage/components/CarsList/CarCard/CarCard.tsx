"use client";

import React, { useState } from "react";
import { Button, LoadingButton } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Download,
  Fuel,
  Gauge,
  Gem,
  Upload,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CarCardProps } from "./CarCard.types";
import EditCarButton from "./EditCarButton/EditCarButton";
import axios from "axios";
import DeleteCarModal from "./DeleteCarModal/DeleteCarModal";

export default function CarCard(props: CarCardProps) {
  const { car } = props;

  const router = useRouter();
  // Estados independientes para cada acción
  const [isLoadingPublish, setIsLoadingPublish] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteCar = async () => {
    setIsLoadingDelete(true);
    try {
      await axios.delete(`/api/car/${car.id}`);

      toast({ title: "Car deleted 👍" });
      setIsLoadingDelete(false);
      router.refresh();
    } catch (error) {
      toast({ title: "Something went wrong 😔", variant: "destructive" });
      setIsLoadingDelete(false); // Resetear el estado en caso de error
    }
  };

  const handlePublishCar = async (publish: boolean) => {
    setIsLoadingPublish(true);
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublic: publish });
      if (publish) {
        toast({ title: "Car published ⬆" });
      } else {
        toast({ title: "Car unpublished ⬇" });
      }
      setIsLoadingPublish(false);
      router.refresh();
    } catch (error) {
      toast({ title: "Something went wrong 😔", variant: "destructive" });
      setIsLoadingPublish(false); // Resetear el estado en caso de error
    }
  };

  return (
    <div className="relative bg-zinc-700 rounded-lg transition-all h-min duration-300 overflow-hidden">
      <div className="flex items-center h-40 sm:h-52 rounded-t-lg ">
        <Image
          src={car.photo}
          alt={car.name}
          width={400}
          height={600}
          className="w-3/4 lg:w-full px-1 mx-auto"
        />
      </div>

      {car.isPublic ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white text-sm bg-teal-600 rounded-t-lg">
          Published
        </p>
      ) : (
        <p className="absolute top-0 left-0 w-full p-1 text-center text-white text-sm bg-red-700 rounded-t-lg">
          Not published
        </p>
      )}
      <div className="relative p-6 py-5">
        <div className="flex flex-col mb-3 gap-x-4 text-white">
          <p
            title={car.name}
            className="text-3xl font-bold text-teal-500 lg:min-h-fit truncate"
          >
            {car.name}
          </p>
          <p>{car.pricePerDay}$ /day</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4 font-light text-white py-4">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" />
            {car.type}
          </p>
          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" />
            {car.transmission}
          </p>
          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            {car.people}
          </p>
          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" />
            {car.fuel}
          </p>
          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" />
            {car.hp}HP
          </p>
        </div>
        <div className="flex gap-1 mt-3">
          {car.isPublic ? (
            <LoadingButton
              className="w-full"
              variant="transparent"
              loading={isLoadingPublish} // Estado específico para "Publish"
              onClick={() => handlePublishCar(false)}
            >
              Unpublish
              <Download className="w-4 h-4 ml-2" />
            </LoadingButton>
          ) : (
            <LoadingButton
              className="w-full"
              loading={isLoadingPublish} // Estado específico para "Unpublish"
              onClick={() => handlePublishCar(true)}
            >
              Publish
              <Upload className="w-4 h-4 ml-2" />
            </LoadingButton>
          )}
          <EditCarButton carData={car} />
          <DeleteCarModal
            deleteCar={deleteCar}
            isLoading={isLoadingDelete}
          />{" "}
          {/* Estado específico para "Delete" */}
        </div>
      </div>
    </div>
  );
}
