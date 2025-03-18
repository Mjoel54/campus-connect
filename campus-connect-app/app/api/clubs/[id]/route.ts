import { NextRequest } from "next/server";
import { clubs } from "@/app/club-data";

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const clubId = params.id;
  const club = clubs.find((club) => club.id === clubId);

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
