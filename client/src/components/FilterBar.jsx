import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function FilterBar() {
  const { setFilter } = useContext(TaskContext);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg">
      {[
        { key: "all", label: "All Tasks" },
        { key: "incomplete", label: "Active" },
        { key: "completed", label: "Completed" },
      ].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleFilter(key)}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
            ${
              activeFilter === key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
