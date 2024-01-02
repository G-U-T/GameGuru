import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'


const SingleGameInformation = () => {
    const {singleGameId} = useParams();
    const [game, setGame] = useState({});
    const [review, setReview] = useState({});

    useEffect(() => {
        const getGame = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}`)
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setGame(jsonResponse);
            } catch (error) {
                throw error;
            }
        };
        getGame();
    }, [])

    useEffect(() => {
        const getReview = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}/reviews`)
                const jsonResponse = await response.json();
                // console.log(`review object: ${JSON.stringify(jsonResponse)}`)
                setReview(jsonResponse);
            } catch (error) {
                throw error;
            }
        };
        getReview();
    },[])
    
    // console.log(game);
    console.log(`review: ${review}`);
    return (
        <section >

            <div className="singleGame">
                <p>{game.title}</p>
                <img src={game.cover_image_url}></img>
                <p>RELEASE DATE: {game.release_date}</p>
                <p>PLATFORM: {game.platform}</p>
                <p>GENRE: {game.genre}</p>
                <p>DESCRIPTION: {game.description}</p>
            </div>

            <div className="singleReview">

               <p></p>
               
            
            </div>
                   
        </section>
    )
}

export default SingleGameInformation