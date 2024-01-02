import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css';


const ConsoleGameList = () => {
  const { consoleName } = useParams();
  const [gameArray, setGameArray] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch(`/api/consoles/${consoleName}`);
        const result = await response.json();
        setGameArray(result.games);
      } catch (error) {
        throw error;
      }
    };
    getGames();
  }, [consoleName]);

  // Function to filter games based on the selected letter
  const filterGamesByLetter = (letter) => {
    setSelectedLetter(letter);
  };

  // Filter games based on the selected letter
  const filteredGames = selectedLetter
    ? gameArray.filter((game) => game.title.startsWith(selectedLetter.toUpperCase()))
    : gameArray;

  // Create an array of letters from game titles
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode('A'.charCodeAt(0) + index));

  return (
    <section>
      {/* Clickable alphabet list */}
      <div className="alphabet-list">
        {alphabet.map((letter) => (
          <button key={letter} onClick={() => filterGamesByLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <h2>Games on {consoleName}:</h2>

      {/* Display filtered games */}
      <div className="game-list">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.cover_image_url} alt={game.title} />
            <p>{game.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ConsoleGameList;