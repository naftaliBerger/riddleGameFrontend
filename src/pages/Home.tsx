import { Link } from "react-router";
export default function Home() {
  return (
    <div>
      <div>
      <h2>Welcome to the game</h2>
        <Link to="/Login"><button>Login</button></Link> 
        <Link to="/Play"><button>Play</button></Link>
        <Link to="/Register"><button>Register</button></Link>
      </div>
    </div>
  );
}
