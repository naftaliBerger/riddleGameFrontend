import { Link } from "react-router"
export default function Play() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
      </div>
      <h2>Play</h2>
    </div>
  )
}
