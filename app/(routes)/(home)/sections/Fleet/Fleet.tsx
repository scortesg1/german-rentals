import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  categoriesFirstBlock,
  categoriesSecondBlock,
  fleetCategories,
} from "./Fleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import "./Fleet.css"

export default function Fleet() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 lg:py-16 2xl:py-60 p-6 lg:px-20 text-white">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-500">
        Our Fleet
      </h2>
      <p className="text-sm mt-2 lg:mt-5 lg:text-xl text-center w-full mx-auto max-w-2xl mb-5 lg:mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic
        placeat expedita perspiciatis dicta
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center mt-10 lg:mt-0 mb-10 max-w-2xl mx-auto">
        {fleetCategories.map((category) => (
          <div
            key={category.name}
            className={cn(
              "rounded-md lg:rounded-xl text-sm lg:text-base py-1.5 lg:py-2 lg:px-3",
              category.active ? "bg-teal-600 text-white" : "bg-slate-100 text-black"
            )}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-x-6 mb-3 first-block">
            {categoriesFirstBlock.map((car, index) => (
                <div key={index} className="group overflow-hidden rounded-sm lg:rounded-xl">
                    <Image
                        src={`/images/categories/${car.url}`}
                        alt="Car"
                        width={400}
                        height={100}
                        priority
                        className="h-full object-cover object-center group-hover:scale-105
                        transition-all duration-300 w-full"
                    />
                </div>
            ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 lg:gap-6 mb-6 max-w-5xl mx-auto second-block">
            {categoriesSecondBlock.map((car, index) => (
                <div key={index} className="group overflow-hidden rounded-sm lg:rounded-xl">
                    <Image
                        src={`/images/categories/${car.url}`}
                        alt="Car"
                        width={400}
                        height={100}
                        priority
                        className="h-full object-cover object-center group-hover:scale-105
                        transition-all duration-300 w-full"
                    />
                </div>
            ))}
        </div>
        <Link href="/cars">
            <Button className="rounded-xl text-black p-6 mt-5" variant="outline">
                See our fleet
                <MoveRight className="ms-3 w-4 md:w-auto
                "/>
            </Button>
        </Link>
      </div>
    </div>
  );
}
