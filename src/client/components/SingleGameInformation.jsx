import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'


const SingleGameInformation = () => {
    const {singleGameId} = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        const getGame = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}`)
                const jsonResponse = await response.json();
                // console.log(jsonResponse);
                setGame(jsonResponse);
            } catch (error) {
                throw error;
            }
        };
        getGame();
    }, [])
    
    console.log(game);
    return (
        <section className="singleGame">
            <h1>hi</h1>
            <p>TITLE: {game.title}</p>
            <p>RELEASE DATE: {game.release_date}</p>
            <p>PLATFORM: {game.platform}</p>
            <p>GENRE:{game.genre}</p>
            <p>DESCRIPTION:{game.description}</p>
                   

        </section>
    )
}

export default SingleGameInformation