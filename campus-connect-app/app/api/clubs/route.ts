import { connectToDb } from "../db";

export async function GET() {
  const { db } = await connectToDb();
  const clubs = await db.collection("clubs").find({}).toArray();

  return new Response(JSON.stringify(clubs), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST() {
  return new Response("club created", {
    status: 201,
  });
}
