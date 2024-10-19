"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollBack() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Agrega este parámetro para un desplazamiento suave
    });
  };

  return (
    <div
      className="fixed z-50 flex bottom-5 right-5 lg:bottom-10 lg:right-10 rounded-md p-2 bg-teal-500 hover:bg-teal-700 transition-colors scroll-smooth duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <ArrowUp className="text-white self-center w-5 h-5 lg:w-8 lg:h-8"></ArrowUp>
    </div>
  );
}
