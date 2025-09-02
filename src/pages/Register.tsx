import { Link } from "react-router"
export default function Register() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
      </div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
