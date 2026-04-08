"use server";

import { neon } from "@neondatabase/serverless";

export async function createBooking(formData: FormData, selectedServices: string[]) {
  const sql = neon(process.env.DATABASE_DB!);

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const phone = formData.get("phone") as string;
    const countryCode = formData.get("countryCode") as string;
    const arrival = formData.get("arrival") as string;
    const departure = formData.get("departure") as string;
    const guests = formData.get("guests") as string;
    const message = formData.get("message") as string;

    const fullWhatsapp = `${countryCode} ${phone}`;

    await sql`
      INSERT INTO bookings (name, email, country, whatsapp, arrival, departure, guests, services, message)
      VALUES (${name}, ${email}, ${country}, ${fullWhatsapp}, ${arrival}, ${departure}, ${guests}, ${selectedServices}, ${message})
    `;

    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to submit booking" };
  }
} 