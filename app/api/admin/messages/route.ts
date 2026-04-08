import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const databaseUrl = process.env.DATABASE_DB;
    
    if (!databaseUrl) {
      return NextResponse.json({ error: "DB URL Missing" }, { status: 500 });
    }

    const sql = neon(databaseUrl);
    const data = await sql`SELECT * FROM messages ORDER BY created_at DESC`;

    return NextResponse.json(data);
  } catch (err) {
    // We return a JSON object so the frontend doesn't receive HTML
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}