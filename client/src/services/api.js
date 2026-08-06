import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getTodos = () => api.get("/todos");

export const addTodo = (title) => api.post("/todos", { title });

export const editTodo = (id, title) => api.put(`/todos/${id}`, { title });

export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export const completeTodo = (id) => api.patch(`/todos/${id}/complete`);
