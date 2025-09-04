import { useState } from "react";
import { Link } from "react-router"
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<React.ReactNode>("");

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
        setMessage(<div>Registration successful! <Link to="/Login">Go to login</Link></div>);
      } else {
        setMessage((data.error));
      }
    } catch (err) {
      console.error(err);
      setMessage("network error");
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
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <div>
            <button type="submit">submit</button>
        </div>
      </form>
      {message}
    </div>
  );
}
