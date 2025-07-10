import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form className="flex gap-2 mt-4" onSubmit={submit}>
      <input
        className="border p-2 rounded flex-1"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded flex-1"
        placeholder="Description (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 rounded">Add</button>
    </form>
  );
}
