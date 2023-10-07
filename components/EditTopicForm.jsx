export default function EditTopic() {
  return (
    <form className="flex flex-col gap-7">
      <input
        className="border border-slate-500 rounded px-8 py-2"
        type="text"
        placeholder="topic title"
      />
      <input
        className="border border-slate-500 rounded px-8 py-2"
        type="text"
        placeholder="topic description"
      />
      <button className="text-white bg-teal-500 rounded py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
}
