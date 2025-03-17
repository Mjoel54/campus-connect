import { Club } from "../club-data";

export default function ClubsList({ clubs }: { clubs: Club[] }) {
  return (
    <>
      {clubs.map((club) => {
        return (
          <div key={club.id}>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p>Members: {club.members.join(", ")}</p>
          </div>
        );
      })}
    </>
  );
}
