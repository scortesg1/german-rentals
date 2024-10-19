import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import MercadoPagoConfig, {
  MerchantOrder,
  Payment,
  Preference,
} from "mercadopago";

export async function POST(req: Request) {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
  });

  try {
    const { userId } = auth();
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const body = await req.json();

    // PROD ONLY
    // Validar el origen de la notificación
    // const secret = req.headers.get("x-signature-id");

    // if (secret !== process.env.PAYMENT_SIGNATURE_SECRET) {
    //   return NextResponse.json({ success: false });
    // }

    // Manejo del primer tipo de cuerpo de la solicitud
    if (body.data?.id) {
      const payment = await new Payment(client).get({ id: body.data.id });
      console.log("[PAYMENT]:", payment);

      const order = {
        data: {
          carId: payment.metadata.car_id,
          carModel: payment.metadata.car_model,
          userId: payment.metadata.user_id.user_id,
          status: "pending",
          totalAmount: payment.metadata.total_amount.toString(),
          startDate: payment.metadata.start_date,
          endDate: payment.metadata.end_date,
        },
      };

      switch (payment.status) {
        case "approved":
          order.data.status = "approved";
          await db.order.create(order);

          return NextResponse.json(order, { status: 201 });
        case "rejected":
          return NextResponse.json({ success: false });
        case "in_process":
          order.data.status = "pending";
          await db.order.create(order);

          return NextResponse.json(order, { status: 201 });
        default:
          break;
      }

      return NextResponse.json("Error", { status: 500 });
    }

    // Si el cuerpo no coincide con el tipo payment
    return new NextResponse("Received", { status: 200 });
  } catch (error: any) {
    console.log("[PAYMENT ERROR]: ", error);
    return new NextResponse("Internal server error", {
      status: error.cause.status,
    });
  }
}
