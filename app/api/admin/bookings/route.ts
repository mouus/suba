import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    // 1. Initialize connection
    const databaseUrl = process.env.DATABASE_DB;
    
    if (!databaseUrl) {
      throw new Error("DATABASE_DB environment variable is not defined");
    }

    const sql = neon(databaseUrl);

    // 2. Execute Query
    const data = await sql`
      SELECT * FROM bookings 
      ORDER BY created_at DESC
    `;

    // 3. Return Data
    return NextResponse.json(data);

  } catch (error: unknown) {
    // 4. Proper Error Handling for TypeScript
    const message = error instanceof Error ? error.message : "Unknown database error";
    console.error("Fetch Bookings Error:", message);

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}