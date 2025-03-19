import { NextRequest } from "next/server";
import { connectToDb } from "../../db";
import { ObjectId } from "mongodb";

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();
  const clubId = params.id;
  // const club = clubs.find((club) => club.id === clubId);
  const club = await db
    .collection("clubs")
    .findOne({ _id: new ObjectId(clubId) });

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
