import { clubs } from "../../club-data";

export default function ClubPage({ params }: { params: { id: string } }) {
  const club = clubs.find((club) => club.id === params.id);

  return (
    <>
      <h1>{club?.name}</h1>
      <p>{club?.description}</p>
    </>
  );
}
