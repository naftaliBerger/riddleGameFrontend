import { Link } from "react-router";
export default function Login() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}
