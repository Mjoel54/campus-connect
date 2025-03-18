export async function GET() {
  return new Response("club retrieved", {
    status: 200,
  });
}

export async function POST() {
  return new Response("club created", {
    status: 201,
  });
}
