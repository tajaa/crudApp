import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  //send params as ids
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { stats: 200 });
}

//get a singlMnMe topic by id

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
