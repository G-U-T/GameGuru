import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'

import WriteReviewForm from "./WriteReviewForm";

const SingleGameInformation = ({savedUserID, savedUserToken}) => {
    const {singleGameId} = useParams();
    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState(null);
    const [IDsToUsernames, setIDsToUsernames] = useState({});

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
            setReviews(jsonResponse);
          } catch (error) {
            throw error;
          }
        };

        // Makes a "dictionary" where for all users
        // the key is the ID and the value is the username.
        const getUsers = async() => {
          try {
            const response = await fetch(`/api/users`);
            const result = await response.json();
            if (response.ok) {
              result.forEach((user) => {
                IDsToUsernames[user.id] = user.username;
              });
            }
          } catch (error) {
            console.error('Error getting users:', error);
          }
        }

        getReviews();
        getUsers();
    }, [newReview])

    return (
        <section className="fullSingleGamePage">

            <div className="singleGame">
                <h1>{game.title}</h1>
                <img src={game.cover_image_url} alt={`Game cover for ${game.title}`}></img>
                
                {
                  /* Release date is formatted like this:
                  2007-07-07T00:00:00.000Z
                  so this code trims it to:
                  2007-07-07
                  */
                  game.release_date ? (
                    <p>RELEASE DATE: {String(game.release_date).slice(0, String(game.release_date.indexOf('T')))}</p>
                  ) : (
                    <p>RELEASE DATE: ...</p>
                  )
                }

                <p>PLATFORM: {game.platform}</p>
                <p>GENRE: {game.genre}</p>
                <p>DESCRIPTION: {game.description}</p>
            </div>

            <div className="singleReview">
                <h1>GAME REVIEWS</h1>
                {reviews.map((review,index) => {
                    return (
                      <div key={index} className="individualReview">  
                          {/* <p>Id: {review.id}</p> */}
                          {/* <p>GameId: {review.gameId}</p> */}
                          <p>User: {IDsToUsernames[review.userId]}</p>
                          <p>Rating: {'⭐'.repeat(review.rating)}</p>
                          <p>Summary: "{review.summary}"</p> 
                      </div>
                    )
                  })}
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