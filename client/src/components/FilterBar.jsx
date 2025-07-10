import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function FilterBar() {
  const { setFilter } = useContext(TaskContext);
  return (
    <div className="flex gap-2 mt-4">
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}
