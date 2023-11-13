"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    // Do server-side processing with the form data
    console.log(name);

    // Send a response back to the client
    return NextResponse.json({ data: [] }, { status: 200 });
  } catch (error) {
    console.error("Error processing form:", error);
    NextResponse.json({ error: "Internal Server Error" });
  }
}
