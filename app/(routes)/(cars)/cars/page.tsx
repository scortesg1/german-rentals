import Navbar from "@/components/shared/NavBar/Navbar";
import { db } from "@/lib/db";
import Filters from "./components/Filters/Filters";

export default async function Cars() {
  const cars = await db.car.findMany({
    where: {
      isPublic: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <Navbar />
      <div className="p-6 mx-auto">
        <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-black text-teal-500">
          Our fleet
        </h1>
        <div>
          <Filters cars={cars} />
        </div>
      </div>
    </main>
  );
}
