import Reveal from "@/components/shared/Reveal/Reveal";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="grid lg:ps-20 lg:grid-cols-[1.5fr,1fr] xl:grid-cols-2 lg:py-12 xl:py-20 2xl:py-24 items-center">
      <Reveal position="bottom" className="p-6 lg:pl-0 xl:pl-16 2xl:pl-40">
        <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-black text-teal-500">
          Rent a <span className="block">German Car</span> with us
        </h1>
        <p className="text-sm md:text-lg mt-2 lg:mt-5 2xl:text-xl max-w-lg text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          animi asperiores expedita laborum maxime nisi vero ea amet voluptatem
          delectus.
        </p>
      </Reveal>

      <Reveal position="right" className="flex justify-end">
        <Image
          src="/images/hero/audia6.png"
          className="w-3/4 lg:w-auto xl:w-11/12 2xl:w-3/4"
          alt="BMW car"
          height={800}
          width={800}
          priority
        ></Image>
      </Reveal>
    </section>
  );
}
