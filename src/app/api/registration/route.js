import dbConnection from "@/app/api/utils/db";
import { NextResponse } from "next/server";
import { userRegistered } from "@/app/api/utils/schema";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);

export async function GET() {
  try {
    const data = await userRegistered.find(); 
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { Event, Team, Name, Email, Phone, College } = await req.json();
    
    if (!Event || !Team || !Name || !Email || !Phone || !College) {
      return NextResponse.json({ message: "Details missing" }, { status: 400 });
    }

    try {
      await userRegistered.create({
        event: Event,
        team: Team,
        name: Name,
        email: Email,
        phone: Phone,
        college: College,
      });
      return NextResponse.json({ message: "Registered" }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
