import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const save = () => {
    updateTask(task.id, { title, description: desc });
    setEditing(false);
  };

  return (
    <div className="flex items-center gap-2 p-2 border-b">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => updateTask(task.id, { completed: !task.completed })}
      />
      {editing ? (
        <>
          <input
            className="border rounded p-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border rounded p-1"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="text-green-600" onClick={save}>
            Save
          </button>
          <button className="text-gray-600" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.title}
          </span>
          <span className="ml-2 text-gray-500">{task.description}</span>
          <button
            className="text-blue-600 ml-auto"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button className="text-red-600" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
