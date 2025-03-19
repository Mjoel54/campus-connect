import Image from "next/image";
import Link from "next/link";
import { Club } from "../club-data";

export default function ClubsList({ clubs }: { clubs: Club[] }) {
  return (
    <>
      {clubs.map((club) => {
        return (
          <Link key={club.id} href={`/clubs/${club.id}`} passHref>
            <div>
              <Image
                src={"/skiing.jpg"}
                alt="person skiing"
                width={200}
                height={200}
              />
              <h2>{club.name}</h2>
              <p>{club.description}</p>
              <p>Members: {club.members.join(", ")}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
