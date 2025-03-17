export interface Club {
  id: string;
  name: string;
  description: string;
  members: string[];
}

export const clubs: Club[] = [
  {
    id: "1",
    name: "Science Club",
    description: "A club for students interested in science and technology.",
    members: ["Alice", "Bob", "Charlie"],
  },
  {
    id: "2",
    name: "Art Club",
    description: "A club for students who love art and creativity.",
    members: ["Dave", "Eve", "Frank"],
  },
  {
    id: "3",
    name: "Music Club",
    description:
      "A club for students who enjoy playing and listening to music.",
    members: ["Grace", "Heidi", "Ivan"],
  },
];
