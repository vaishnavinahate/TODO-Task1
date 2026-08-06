import TodoItem from "./TodoItem";

export default function TodoList(props) {
  if (!props.todos.length) return <p className="py-10 text-center text-slate-500">No todos yet.</p>;
  return <ul className="space-y-3">{props.todos.map((todo) => <TodoItem key={todo._id} todo={todo} onComplete={props.onComplete} onEdit={props.onEdit} onDelete={props.onDelete} />)}</ul>;
}
