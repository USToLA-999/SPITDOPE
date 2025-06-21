import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [login, setLogin] = useState({ username: "sunny", password: "123" });
  const navigate = useNavigate();

  const handleChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/login", login, { withCredentials: true });
      navigate("/admin");
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-8">
      <h2 className="text-2xl font-bold">Admin Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} className="border p-2 block my-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 block my-2" />
      <button className="bg-blue-600 text-black px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default AdminLogin;

