import React from "react";
import { featuresData } from "./Features.data";
import Reveal from "@/components/shared/Reveal/Reveal";
import { Icon } from "lucide-react";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:px-20 lg:py-16 2xl:py-40">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-500">Key features</h2>
      <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-sm lg:text-xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        iusto nobis eveniet nam laboriosam accusamus.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-5 mt-6 sm:mt-10 lg:mt-0">
        {featuresData.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            className="p-6 rounded-xl flex flex-col items-center text-white"
            position="right"
            delay={delay}
          >
            <div className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center`}>
              <Icon className="w-6 lg:w-8 h-6  lg:h-8" />
            </div>
            <p className="lg:font-bold sm:font-medium text-sm text-center lg:text-xl">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
