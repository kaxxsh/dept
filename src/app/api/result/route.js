import dbConnection from "@/app/api/utils/db";
import { NextResponse } from "next/server";
import { eventResults } from "@/app/api/utils/schema";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);
export async function GET() {
  try {
    const data = await eventResults.find();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData);
    try {
      const prev = await eventResults.findById(data._id);
      if (!prev) {
        await eventResults.create({
          event: data.event,
          round1: data.round1,
          round2: data.round2,
          round3: data.round3,
        });
      } else {
        try {
          await eventResults.findByIdAndUpdate(data._id, {
            event: data.event,
            round1: data.round1,
            round2: data.round2,
            round3: data.round3,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json(
      { message: "eventResults Added" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function PATCH() {}
export async function DELETE() {}
