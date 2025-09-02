import { Link } from "react-router"
export default function Leaderboard() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Play">Play</Link>
        <Link to="/Register">Register</Link>
      </div>
      <div>Leaderboard</div>
    </div>
  )
}
