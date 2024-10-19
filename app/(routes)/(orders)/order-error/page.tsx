import Navbar from "@/components/shared/NavBar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderErrorPage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10 text-white text-center p-6 max-w-7xl mx-auto">
        <h1 className="text-5xl text-red-500 font-bold ">Something went wrong</h1>
        <p className="mt-8 text-xl">
          An error occurred with your payment, and it cannot be processed right now. <br /> Please try again later or contact us via WhatsApp.
        </p>
        <Link href="/" className="mt-8">
          <Button>Go back</Button>
        </Link>
      </main>
    </div>
  );
}
