import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Play() {
  const [message, setMessage] = useState<React.ReactNode>("");
  const [riddles, setRiddles] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const response = await fetch("http://localhost:3005/riddles");
        const data = await response.json();
        setRiddles(data);
      } catch (err) {
        console.error(err);
        setMessage("Network error");
      }
    };

    fetchRiddles();
  }, []);

  const handleNext = () => {
    if (currentIndex < riddles.length - 1) {
      setCurrentIndex(currentIndex + 1); 
    } else {
      setMessage("You've completed all riddles!");
    }
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link> -- 
        <Link to="/Login">Login</Link>
      </div>
      <h2>Play</h2>


      {riddles.length > 0 && currentIndex < riddles.length && (
        <div>
          <p><strong>{riddles[currentIndex].name}:</strong> {riddles[currentIndex].question}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}
