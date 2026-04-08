import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, country, whatsapp, arrival, departure, guests, services, message } = body;

    // Use the environment variable you provided earlier
    const sql = neon(process.env.DATABASE_DB!);

    await sql`
      INSERT INTO bookings (name, email, country, whatsapp, arrival, departure, guests, services, message)
      VALUES (${name}, ${email}, ${country}, ${whatsapp}, ${arrival}, ${departure}, ${guests}, ${services}, ${message})
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: "Database insertion failed" }, { status: 500 });
  }
}
