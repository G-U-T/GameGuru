import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const SingeGameInformation = () => {
    const {singleGameId} = useParams();
    const [gameArray, setGameArray] = useState([]);

    useEffect(() => {
        const getGame = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}`)
                const jsonResponse = await response.json();
                setGameArray(result.game)
            } catch (error) {
                throw error;
            }
        };
        getGame();
    }, [])

    return (
        <section>
            
            {gameArray.map((game) => {
                return (
                    <p>{game.title}</p>,
                    <p>{game.release_date}</p>,
                    <p>{game.platform}</p>,
                    <p>{game.genre}</p>,
                    <p>{game.description}</p>
                    )
                })}

        </section>
    )
}

export default SingeGameInformation