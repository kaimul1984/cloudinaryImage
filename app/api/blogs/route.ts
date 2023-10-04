import { NextResponse } from "next/server";
import dbConnection from "@/utils/db";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await dbConnection();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to fetch" + error, { status: 500 });
  }
}

export async function POST(req: Request, res: Response) {
  await dbConnection();
  try {
    const body = await req.json();
    console.log(body);
    const newPost = await Blog.create(body);
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json("failed");
  }
}
