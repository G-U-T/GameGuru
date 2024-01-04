import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css'

const ReviewAndComments = () => {
    const { singleGameId, reviewId } = useParams();
    
    const [singleReview,setSingleReview] = useState({})

    useEffect(() => {
        const getReview = async() => {
            try{
                const response = await fetch(`/api/games/${singleGameId}/reviews/${reviewId}`)
                const jsonResponse = await response.json();
                console.log(jsonResponse);
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
                const response = await fetch(`/api/comments/`)

            } catch (error) {
                throw error
            }
        }
    }, [])
    return (
        <section>

            <h1>REVIEW AND COMMENTS</h1>

            <div className="reviewFromReviewAndComments">

                <p>Review Id: {singleReview.id}</p>
                <p>Game Id: {singleReview.gameId}</p>
                <p>User Id: {singleReview.userId}</p>
                <p>Rating: {singleReview.rating} star</p>
                <p>Summary: {singleReview.summary}</p>
        
            </div>


        </section>


    )
}

export default ReviewAndComments