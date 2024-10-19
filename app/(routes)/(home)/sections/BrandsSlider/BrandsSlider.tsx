"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { brandsSliderData } from "./BrandsSlider.data";
import Reveal from "@/components/shared/Reveal/Reveal";

export default function BrandsSlider() {
  return (
    <Reveal
      position="bottom"
      className="flex gap-x-20 justify-center mt-20 lg:pb-20 lg:mt-20 mb-10 mx-10 md:mx-0"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {brandsSliderData.map(({ url }) => (
            <CarouselItem 
            key={url}
            className="basis-4/4 md:basis-1/4 lg:basis-1/6">
                <Image src={`/images/brands-slider/${url}`} alt="Car Brand" width={100} height={100} className="object-contain w-20 md:w-32 lg:w-36 aspect-[3/2] mx-auto"></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
