import Navbar from "@/components/shared/NavBar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderPendingPage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10 text-white text-center p-6 max-w-7xl mx-auto">
        <h1 className="text-5xl text-yellow-500 font-extrabold">
          Processing payment
        </h1>
        <p className="mt-6 text-xl text-gray-300">
          Your payment is currently being processed. <br />
          Please check your reserves page for more updates on the payment
          status. If you encounter any issues, contact our support via WhatsApp.
        </p>
        <Link href="/reservations" className="mt-10">
          <Button>Check reserves</Button>
        </Link>
      </main>
    </div>
  );
}
