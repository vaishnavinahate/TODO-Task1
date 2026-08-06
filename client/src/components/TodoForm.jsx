import { useState } from "react";

function TodoForm({ onAdd, isSubmitting }) {
  const [title, setTitle] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const value = title.trim();
    if (!value) return;
    const added = await onAdd(value);
    if (added) setTitle("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs to be done?" aria-label="New todo" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
      <button disabled={isSubmitting} className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700 disabled:bg-indigo-300">
        {isSubmitting ? "Adding..." : "Add Todo"}
      </button>
    </form>
  );
}

export default TodoForm;
