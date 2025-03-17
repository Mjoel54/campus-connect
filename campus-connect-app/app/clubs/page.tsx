import ClubsList from "./clubsList";
import { clubs } from "../club-data";

export default function Clubs() {
  return (
    <>
      <h1>Clubs</h1>
      <ClubsList clubs={clubs} />
    </>
  );
}
