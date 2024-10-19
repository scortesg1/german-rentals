import { auth } from "@clerk/nextjs/server";
import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import CarsList from "./components/CarsList/CarsList";

export default async function CarsManagerPage() {
  const { userId, orgRole } = auth();

  if (!userId) {
    return redirect("/");
  }
  if (orgRole !== "org:admin"){
    return redirect("/dashboard")
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy:{
      createdAt: "desc"
    }
  }) 

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">Manage fleet</h2>
        <ButtonAddCar />
      </div>
      <CarsList cars={cars}/>
    </div>
  );
}
