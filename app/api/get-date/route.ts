import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ data: Number(new Date()) });
}
