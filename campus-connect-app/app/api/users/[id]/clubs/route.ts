import { NextRequest } from "next/server";
import { clubs as clubData } from "@/app/club-data"; // imported club details

type UserClubs = {
  id: string;
  clubs: string[];
};

// This is your user-club mapping data
const userClubsMapping: UserClubs[] = [{ id: "1", clubs: ["1", "2"] }];

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const userMapping = userClubsMapping.find((user) => user.id === userId);

  // If no user mapping is found, return a 404 response
  if (!userMapping) {
    return new Response("User not found", {
      status: 404,
    });
  }

  // Map over club IDs from the user mapping to get the actual club data
  const userClubsData = userMapping.clubs.map((clubId) =>
    clubData.find((club) => club.id === clubId)
  );

  return new Response(JSON.stringify(userClubsData), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
