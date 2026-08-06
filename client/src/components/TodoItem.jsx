import { useState } from "react";

export default function TodoItem({ todo, onComplete, onEdit, onDelete }) {
  const [value, setValue] = useState(todo.title);
  const [editing, setEditing] = useState(false);
  const save = async () => {
    if (value.trim() && await onEdit(todo._id, value.trim())) setEditing(false);
  };
  return <li className="flex flex-col gap-3 rounded-lg border bg-white p-4 sm:flex-row sm:items-center">
    <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo._id)} className="h-5 w-5 accent-indigo-600" />
    {editing ? <input autoFocus value={value} onChange={(e) => setValue(e.target.value)} className="flex-1 rounded border px-3 py-2" /> : <span className={`flex-1 ${todo.completed ? "text-slate-400 line-through" : ""}`}>{todo.title}</span>}
    <div className="flex gap-2">
      {editing ? <><button onClick={save} className="rounded bg-indigo-600 px-3 py-2 text-white">Save</button><button onClick={() => setEditing(false)} className="rounded bg-slate-100 px-3 py-2">Cancel</button></> : <><button onClick={() => setEditing(true)} className="rounded bg-slate-100 px-3 py-2">Edit</button><button onClick={() => onDelete(todo._id)} className="rounded bg-red-50 px-3 py-2 text-red-700">Delete</button></>}
    </div>
  </li>;
}
