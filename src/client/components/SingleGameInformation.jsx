import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'
import { Link } from 'react-router-dom';

import WriteReviewForm from "./WriteReviewForm";

const SingleGameInformation = ({savedUserID, savedUserToken}) => {
    const {singleGameId} = useParams();
    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState(null);

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
        const getReviews = async() => {
            try {
                const response = await fetch(`/api/games/${singleGameId}/reviews`)
                const jsonResponse = await response.json();
                console.log(jsonResponse)
                setReviews(jsonResponse);
            } catch (error) {
                throw error;
            }
        };
        getReviews();
    }, [newReview])
    
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
                {reviews.map((review) => (
                        
                        <Link to={`/api/games/${review.gameId}/reviews/${review.id}`}> 
                        <div key={review.gameId} className="individualReview"> 

                            <p>Id: {review.id}</p>
                            <p>GameId: {review.gameId}</p>
                            <p>UserId: {review.userId}</p>
                            <p>rating: {review.rating}</p>
                            <p>summary: {review.summary}</p> 

                        </div>
                        </Link> 
                    ))}
            </div>

            <br/><br/><br/>
            <WriteReviewForm 
            gameID={singleGameId} 
            savedUserID={savedUserID} 
            savedUserToken={savedUserToken}
            setNewReview={setNewReview}
            ></WriteReviewForm>
        </section>
    )
}

export default SingleGameInformation