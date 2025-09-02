import { Link } from "react-router"
export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Play">Play</Link>
        <Link to="/Register">Register</Link>
    </nav>
  );
}
