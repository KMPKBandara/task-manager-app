import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function AuthForm() {
  const { login } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const url = `http://localhost:5000/api/auth/${
        isRegister ? "register" : "login"
      }`;
      const res = await axios.post(url, { username, password });
      login(res.data.token, res.data.username);
    } catch (err) {
      setError(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">
        {isRegister ? "Register" : "Login"}
      </h2>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500">{error}</div>}
        <button className="p-2 bg-blue-600 text-white rounded">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <button
        onClick={() => setIsRegister((x) => !x)}
        className="text-blue-500 mt-2 underline"
      >
        {isRegister ? "Have an account? Login" : "New? Register"}
      </button>
    </div>
  );
}
