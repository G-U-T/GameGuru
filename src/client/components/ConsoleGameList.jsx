import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css';


const ConsoleGameList = () => {
  const {consoleName} = useParams();
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    const getGames = async() => {
      try {
        const response = await fetch(`/api/consoles/${consoleName}`);
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
      {gameArray.map((game) => {
        return (<p>{game.title}</p>)
      })}
    </section>
  );
}

export default ConsoleGameList;