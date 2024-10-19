import Navbar from "@/components/shared/NavBar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderSuccessPage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10 text-white text-center p-6 max-w-7xl mx-auto">
        <h1 className="text-5xl text-teal-500 font-bold ">Payment completed</h1>
        <p className="mt-8 text-xl">
          Thanks for your trust!. We've received your payment. <br /> <br /> You
          can now check your reservation in the{" "}
          <Link href="/reservations" className="text-teal-500">
            Reserves
          </Link>{" "}
          tab.
        </p>
        <Link href="/reservations" className="mt-8">
          <Button>Check your reserves</Button>
        </Link>
      </main>
    </div>
  );
}
