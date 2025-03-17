import Image from "next/image";
import skiing from "../clubs-images/skiing.jpg";
import { Club } from "../club-data";

export default function ClubsList({ clubs }: { clubs: Club[] }) {
  return (
    <>
      {clubs.map((club) => {
        return (
          <div key={club.id}>
            <Image src={skiing} alt="person skiing" width={200} height={200} />
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p>Members: {club.members.join(", ")}</p>
          </div>
        );
      })}
    </>
  );
}
