"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  //get data from input fields and store into a state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); //this will prevent page from reloading when button is pressed
    //input validation
    if (!title || !description) {
      alert("title and description are required.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("hi");
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 rounded px-8 py-2 text-black"
        type="text"
        placeholder="topic title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 rounded px-8 py-2 text-black"
        type="text"
        placeholder="topic description"
      />
      <button
        type="submit"
        className="text-white bg-teal-500 rounded py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
