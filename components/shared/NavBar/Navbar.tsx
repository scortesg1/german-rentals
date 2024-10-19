"use client";

import React from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <div className="max-w-5xl py-5 mx-auto lg:mx-auto mt-5">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image
            src="/logo.png"
            alt="GermanRentals Logo"
            width={50}
            height={50}
            className="w-8 lg:w-10 md:w-auto"
          ></Image>
          <span className="text-sm md:text-xl font-bold text-white">GermanRentals</span>
        </Link>
        <div className="flex items-center mt-6 lg:mt-0 justify-center gap-x-4 lg:gap-x-7 text-sm lg:text-base">
          <Link href="/cars" className="text-white font-medium hover:text-teal-500 transition-colors duration-300">
            Car List
          </Link>
          <Link href="/dashboard" className="text-white font-medium hover:text-teal-500 transition-colors duration-300">
            Dashboard
          </Link>
          {userId ? (
            <>
              <Link href="/favorites">
                <Heart strokeWidth={2} className="cursor-pointer text-white" />
              </Link>
              <UserButton/>
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
                <Button >Sign in</Button>
                <User className="ml-2 w-4 h-4"/>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
