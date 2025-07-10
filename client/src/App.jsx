import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import AuthForm from "./components/AuthForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function MainApp() {
  const { token, username, logout } = useContext(AuthContext);

  if (!token) return <AuthForm />;

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Welcome,{" "}
                  <span className="font-medium text-gray-900">{username}</span>
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Task Form */}
          <div className="mb-6">
            <TaskForm />
          </div>

          {/* Filter Bar */}
          <div className="mb-6">
            <FilterBar />
          </div>

          {/* Task List */}
          <div>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
