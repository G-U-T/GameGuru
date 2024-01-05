import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'

const ReviewAndComments = () => {
    const { singleGameId, reviewId } = useParams();
    
    const [singleReview,setSingleReview] = useState({});
    const [comments, setComments] = useState([]);
    const [IDsToUsernames, setIdsToUsernames] = useState({})

    useEffect(() => {
        const getReview = async() => {
            try{
                const response = await fetch(`/api/games/${singleGameId}/reviews/${reviewId}`)
                const jsonResponse = await response.json();
                // console.log(jsonResponse);
                setSingleReview(jsonResponse);
            } catch (error) {
                throw error
            }
        };
        getReview();
    },[])

    useEffect(() => {
        const getComments = async() => {
            try{
                const response = await fetch(`/api/games/:gameId/reviews/${reviewId}/comments`)
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setComments(jsonResponse);
            } catch (error) {
                throw error
            }
        }
        getComments();
    }, [])

    useEffect(() => {
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
          getUsers();
    },[])
    
    return (
        <section className="fullReviewAndComments">

            <h1>REVIEW AND COMMENTS</h1>

            <div className="reviewFromReviewAndComments">

                {/* <p>Review Id: {singleReview.id}</p> */}
                {/* <p>Game Id: {singleReview.gameId}</p> */}
                <p>User: {IDsToUsernames[singleReview.userId]}</p>
                <p>Rating: {'⭐'.repeat(singleReview.rating)} star</p>
                <p>Summary: "{singleReview.summary}"</p>
        
            </div>

            <div className="commentsFromReviewAndComments">
                {comments.map((comment) => (
                    
                    <div key={comment.id} className="individualCommentFromReviewAndComments">

                        {/* <p>ID: {comment.id}</p> */}
                        {/* <p>Reviews ID: {comment.reviewsId}</p> */}
                        <p>User: {IDsToUsernames[comment.userId]}</p>
                        <p>Comment: "{comment.comment_text}"</p>
                        
                    </div>
                ))}
            </div>


        </section>


    )
}

export default ReviewAndComments