import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function CarsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4 mt-10">
      {[...Array(8)].map((_, index) => (
        <div key={index}>
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <Skeleton className="h-4 w-[200px] mt-5" />
          <Skeleton className="h-4 w-[200px] mt-5" />
          <Skeleton className="h-4 w-[200px] mt-5" />
        </div>
      ))}
    </div>
  );
}
