import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();
  const clubId = params.id;
  const club = await db.collection("clubs").findOne({ id: clubId });

  if (!club) {
    return new Response("Club not found", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(club), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
