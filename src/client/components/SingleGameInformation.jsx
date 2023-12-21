import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const SingeGameInformation = () => {
    const {gameId} = useParams();
    const [gameArray, setGameArray] = useState([]);

    useEffect(() => {
        const getGame = async() => {
            try {
                const response = await fetch(`/api/console/${gameId}`)
                const jsonResponse = await response.json();
                setGameArray(result.game)
            } catch (error) {
                throw error;
            }
        };
        getGame();
    }, [])
}

export default SingeGameInformation