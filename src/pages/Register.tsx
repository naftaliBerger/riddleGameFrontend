import { useState } from "react";
import { Link } from "react-router"
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:3005/players/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
      } else {
        setMessage("Registration failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error");
    }
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>--
        <Link to="/Login">Login</Link>
      </div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <div>
            <button type="submit">Register</button>
        </div>
      </form>
      {message}
    </div>
  );
}
