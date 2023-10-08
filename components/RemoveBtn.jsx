"use client";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const removeTopic = async () => {
    const confirmed = confirm("are you sure?");

    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-300">
      <HiOutlineTrash size={24} />
    </button>
  );
}
