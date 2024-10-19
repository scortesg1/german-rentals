import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashboardLogo() {
  return (
    <Link
      href="/"
      className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 justify-center border-teal-700"
    >
      <Image src="/logo.png" width={30} height={30} priority alt="BMW Logo"/>
      <h1 className="text-xl font-extrabold text-white">GermanRentals</h1>
    </Link>
  );
}
