import { clubs } from "../../club-data";

export async function GET() {
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
