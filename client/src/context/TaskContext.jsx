import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    if (!token) return;
    let url = "http://localhost:5000/api/tasks";
    if (filter === "completed") url += "?completed=true";
    if (filter === "incomplete") url += "?completed=false";
    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [token, filter]);

  const addTask = async (title, description) => {
    const res = await axios.post(
      "http://localhost:5000/api/tasks",
      { title, description },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTasks((prev) => [res.data, ...prev]);
  };

  const updateTask = async (id, updates) => {
    const res = await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      updates,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
}
