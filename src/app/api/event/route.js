import dbConnection from "@/app/api/utils/db";
import { NextResponse } from "next/server";
import { eventDetails } from "@/app/api/utils/schema";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import Path from "path";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET,
  secure: true,
});
export async function GET() {
  try {
    const data = await eventDetails.find();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const banner = formData.getAll("banner");
    if (banner) {
      for (let i = 0; i < banner.length; i++) {
        if (typeof banner[i] === "object") {
          const bytes = await banner[i].arrayBuffer();
          const buffer = Buffer.from(bytes);
          const currentDir = process.cwd();
          const path = Path.join(currentDir, banner[i].name);
          try {
            await writeFile(path, buffer);
          } catch (error) {
            console.log(error);
            return NextResponse.json(
              { message: error.message },
              { status: 500 }
            );
          }
          const { secure_url } = await cloudinary.uploader.upload(path, {
            public_id: randomUUID(),
            folder: "test",
          });
          formData.append("banner", secure_url);
          fs.unlinkSync(path);
        } else {
          formData.append("banner", banner[i]);
        }
      }
    }
    const photo = formData.getAll("photo");
    if (photo) {
      for (let i = 0; i < photo.length; i++) {
        if (typeof photo[i] === "object") {
          const bytes = await photo[i].arrayBuffer();
          const buffer = Buffer.from(bytes);
          const currentDir = process.cwd();
          const path = Path.join(currentDir, photo[i].name);
          try {
            await writeFile(path, buffer);
          } catch (error) {
            return NextResponse.json(
              { message: error.message },
              { status: 500 }
            );
          }
          const { secure_url } = await cloudinary.uploader.upload(path, {
            public_id: randomUUID(),
            folder: "test",
          });
          formData.append("photo", secure_url);
          fs.unlinkSync(path);
        } else {
          formData.append("photo", photo[i]);
        }
      }
    }
    const data = Object.fromEntries(formData);
    try {
      console.log(data);
      const prev = await eventDetails.findById(data._id);
      if (!prev) {
        await eventDetails.create({
          type: data.type,
          title: data.title,
          description: data.description,
          days: data.data,
          round1: data.round1,
          round2: data.round2,
          round3: data.round3,
          inposition: data.inposition,
          inname: data.inname,
          inexeperience: data.inexeperience,
          indescription: data.indescription,
          linkedin: data.linkedin,
          mailid: data.mailid,
          rule1: data.rule1,
          rule2: data.round2,
          rule3: data.rule3,
          requirements: data.requirements,
          course: data.course,
          banner: data.banner,
          photo: data.photo,
        });
      } else {
        await eventDetails.findByIdAndUpdate(data._id, {
          type: data.type,
          title: data.title,
          description: data.description,
          days: data.data,
          round1: data.round1,
          round2: data.round2,
          round3: data.round3,
          inposition: data.inposition,
          inname: data.inname,
          inexeperience: data.inexeperience,
          indescription: data.indescription,
          linkedin: data.linkedin,
          mailid: data.mailid,
          rule1: data.rule1,
          rule2: data.round2,
          rule3: data.rule3,
          requirements: data.requirements,
          course: data.course,
          banner: data.banner,
          photo: data.photo,
        });
      }
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json(
      { message: "eventDetails Added" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function PATCH() {}
export async function DELETE() {}
