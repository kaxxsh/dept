import { eventResults } from "@/app/api/utils/schema";
import { NextResponse } from "next/server";
import dbConnection from "@/app/api/utils/db";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);

export async function GET(req, { params }) {
  const id = params.id;
  try {
    const res = await eventResults.findById(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
