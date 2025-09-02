import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard"
import Login from "./pages/Login"
import Play from "./pages/Play"
import Register from "./pages/Register"
import Navbar from "./pages/Navbar";
export default function App() {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/play" element={<Play />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  )
}
