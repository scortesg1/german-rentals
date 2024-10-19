import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster"
import ScrollBack from "@/components/shared/ScrollBack/ScrollBack";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GermanRentals",
  description: "Rent a German car today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${dm.className} bg-zinc-800 overflow-x-hidden relative`}>
          <NextTopLoader color="#18a3a8" />
          {children}
          <Toaster/>
          <ScrollBack/>
        </body>
      </html>
    </ClerkProvider>
  );
}
