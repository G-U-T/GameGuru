import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css';


const ConsoleGameList = () => {
  const {consoleName} = useParams();
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    const getGames = async() => {
      try {
        const response = await fetch(`/consoles/${consoleName}`);
        const result = await response.json();
        setGameArray(result.games);
      }
      catch(error) {
        throw error;
      }
    };
    getGames();
  }, []);

  return (
    <section>
    <h2>Games on {consoleName}:</h2>
    <div className="game-list">
      {gameArray.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.cover_image_url} alt={game.title} />
          <p>{game.title}</p>
        </div>
      ))}
    </div>
  </section>
);
}

export default ConsoleGameList;