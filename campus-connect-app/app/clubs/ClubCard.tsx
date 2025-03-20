import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Club } from "@/app/club-data";
import dotenv from "dotenv";

export const dynamic = "force-dynamic";

dotenv.config();

const baseUrl = process.env.VERCEL_URL
  ? `https://campus-connect-gray.vercel.app
`
  : "http://localhost:3000";

export default async function ClubCard() {
  const response = await fetch(`${baseUrl}/api/clubs`);
  const data = await response.json();
  //   console.log(data);

  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-hidden bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl"
    >
      {data.map((club: Club) => (
        <li
          key={club._id}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 cursor-pointer"
        >
          <div className="flex min-w-0 gap-x-4">
            {/* <img
              alt=""
              src={person.imageUrl}
              className="size-12 flex-none rounded-full bg-gray-50"
            /> */}
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                <a href={`/clubs/${club.id}`} className="hover:underline">
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {club.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs/5 text-gray-500">Category</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">
                {club.members.length} members
              </p>
              {/* {person.lastSeen ? (
                <p className="mt-1 text-xs/5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs/5 text-gray-500">Online</p>
                </div>
              )} */}
            </div>
            <ChevronRightIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
