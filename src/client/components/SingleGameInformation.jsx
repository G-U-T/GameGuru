import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'

import WriteReviewForm from "./WriteReviewForm";

const SingleGameInformation = () => {
    const {singleGameId} = useParams();
    const [game, setGame] = useState({});
    const [review, setReview] = useState([]);

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

    useEffect(() => {
        const getReview = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}/reviews`)
                const jsonResponse = await response.json();
                console.log(jsonResponse)
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
        <section className="fullSingleGamePage">

            <div className="singleGame">
                <h1>{game.title}</h1>
                <img src={game.cover_image_url}></img>
                <p>RELEASE DATE: {game.release_date}</p>
                <p>PLATFORM: {game.platform}</p>
                <p>GENRE: {game.genre}</p>
                <p>DESCRIPTION: {game.description}</p>
            </div>


            <div className="singleReview">
                <h1>GAME REVIEWS</h1>
                {review.map((reviews,index) => {
                    return (
                        <div key={index} className="individualReview">  
                            <p>Id: {reviews.userId}</p>
                            <p>GameId: {reviews.gameId}</p>
                            <p>UserId: {reviews.userId}</p>
                            <p>rating: {reviews.rating}</p>
                            <p>summary: {reviews.summary}</p> 
                        </div>
                        
                        )
                    })}
                    
            
            </div>

            <br/><br/><br/><WriteReviewForm></WriteReviewForm>
        </section>
    )
}

export default SingleGameInformation