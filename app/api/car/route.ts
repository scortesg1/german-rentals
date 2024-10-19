import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const car = await db.car.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.log("[CAR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  if (req.method === "GET") {
    try {
      const cars = await db.car.findMany();
      return NextResponse.json(cars);
    } catch (error) {
      return new NextResponse("Error fetching cars", { status: 500 });
    }
  } else {
    return new NextResponse("Method not allowed", { status: 405 });
  }
}
