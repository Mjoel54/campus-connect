import { connectToDb } from "../db";
import { ClubSeed } from "@/types/club";

const clubs: ClubSeed[] = [
  {
    id: "1",
    name: "Science Club",
    description: "A club for students interested in science and technology.",
    category: "Tech",
    coverImageUrl:
      "https://unsplash.com/photos/water-droplets-on-glass-during-daytime-Mm1VIPqd0OA",
    members: ["Alice", "Bob", "Charlie"],
  },
  {
    id: "2",
    name: "Art Club",
    description: "A club for students who love art and creativity.",
    category: "Arts",
    members: ["Dave", "Eve", "Frank"],
  },
  {
    id: "3",
    name: "Music Club",
    description:
      "A club for students who enjoy playing and listening to music.",
    category: "Arts",
    members: ["Grace", "Heidi", "Ivan"],
  },
  {
    id: "4",
    name: "Drama Club",
    description: "A club for students interested in acting and theater.",
    category: "Arts",
    members: ["Jack", "Karen", "Leo"],
  },
  {
    id: "5",
    name: "Chess Club",
    description: "A club for students who enjoy playing chess.",
    category: "Other",
    members: ["Mia", "Nina", "Oscar"],
  },
];

const seedClubs = async () => {
  const { db } = await connectToDb();
  db.collection("clubs").insertMany(clubs);
  console.log("Clubs seeded successfully!");
};

seedClubs();
