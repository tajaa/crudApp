import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

//get topics from db
const getTopics = async () => {
  try {
    //by default next.js stores the first data so use 'no store'
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("error loading topics:", error);
  }
};

export default async function TopicsList() {
  //call 'getTopics' here
  const { topics } = await getTopics();

  return (
    <>
      {/*map through topics and display them*/}
      {topics.map((t) => (
        <div
          className="p-4 border border-slate-300 my-3 flex
      justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl font-serif">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
