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
      <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow bg-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-blue-700">Task Manager</h1>
          <div>
            <span className="text-gray-600 mr-2">Hi, {username}</span>
            <button className="text-red-500 underline" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <TaskForm />
        <FilterBar />
        <TaskList />
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
