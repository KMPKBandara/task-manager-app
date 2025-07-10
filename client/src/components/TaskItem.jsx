import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const save = () => {
    if (!title.trim()) return;
    updateTask(task.id, { title, description: desc });
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-3 transition-all duration-200 hover:shadow-md">
      {editing ? (
        <div className="space-y-3">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description (optional)"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={save}
              className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors duration-200"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask(task.id, { completed: !task.completed })}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
          />
          <div className="ml-3 flex-grow">
            <p
              className={`text-sm font-medium ${
                task.completed ? "line-through text-gray-400" : "text-gray-900"
              }`}
            >
              {task.title}
            </p>
            {task.description && (
              <p
                className={`text-sm ${
                  task.completed ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {task.description}
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setEditing(true)}
              className="p-1 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
