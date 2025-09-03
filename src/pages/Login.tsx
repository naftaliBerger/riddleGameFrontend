import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/players/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setMessage("Login successful!");
        <Link to="/Play">Go to Play</Link>
        localStorage.setItem("token", data.token); 
      } else {
        setMessage("Login failed: " + (data.error || "Unknown error"));
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
        <Link to="/Register">Register</Link>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {message}
      </div>
    </div>
  );
}
