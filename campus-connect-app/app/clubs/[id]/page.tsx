import NotFound from "@/app/not-found";
import { clubs } from "../../club-data";

export default function ClubPage({ params }: { params: { id: string } }) {
  const club = clubs.find((club) => club.id === params.id);

  if (!club) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{club?.name}</h1>
      <p>{club?.description}</p>
    </>
  );
}
