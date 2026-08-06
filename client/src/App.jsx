import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo, completeTodo, deleteTodo, editTodo, getTodos } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const load = async () => {
    try { const { data } = await getTodos(); setTodos(data); }
    catch { setError("Could not load todos."); }
  };
  useEffect(() => { load(); }, []);
  const run = async (action) => {
    try { setError(""); await action(); await load(); return true; }
    catch { setError("Something went wrong. Please try again."); return false; }
  };
  return <main className="min-h-screen bg-slate-100 p-4 sm:p-10"><section className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg"><h1 className="mb-6 text-3xl font-bold text-slate-900">My Todos</h1><TodoForm onAdd={(title) => run(() => addTodo(title))} />{error && <p className="mt-4 text-red-700">{error}</p>}<div className="mt-6"><TodoList todos={todos} onComplete={(id) => run(() => completeTodo(id))} onEdit={(id, title) => run(() => editTodo(id, title))} onDelete={(id) => run(() => deleteTodo(id))} /></div></section></main>;
}

export default App;
