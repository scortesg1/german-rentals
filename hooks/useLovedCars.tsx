import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
  favoriteCars: Car[];
  addFavoriteCar: (data: Car) => void;
  verifyCars: (data: Car[]) => void;
  removeFavoriteCar: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      favoriteCars: [],
      addFavoriteCar: (data: Car) => {
        const currentLovedItems = get().favoriteCars;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "The Car has already been added to the list 💔",
          });
        }

        set({
          favoriteCars: [...get().favoriteCars, data],
        });

        toast({
          title: "The Car has been added to the list 🚙✅",
        });
      },

      verifyCars: (cars: Car[]) => {
        const currentCars = get().favoriteCars;
      
        // Filtrar los carros favoritos que aún sean públicos
        const verifiedCars = currentCars.filter((car: Car) => {
          // Buscar el carro en la lista de carros y verificar su estado
          const matchedCar = cars.find((dbCar) => dbCar.id === car.id);
          return matchedCar && matchedCar.isPublic;
        });
      
        // Actualizar la lista de favoritos con los carros verificados
        set({ favoriteCars: [...verifiedCars] });
      },

      removeFavoriteCar: (id: string) => {
        set({
          favoriteCars: [
            ...get().favoriteCars.filter((item) => item.id !== id),
          ],
        });
        toast({
          title: "The Car has been deleted from the list👍",
        });
      },
    }),
    {
      name: "favorite-cars-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
