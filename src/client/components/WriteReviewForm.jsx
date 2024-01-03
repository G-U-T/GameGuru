import {React, useState} from "react";

const WriteReviewForm = ({gameID, savedUserID, savedUserToken, setNewReview}) => {
  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState(``);
  const [responseMessage, setResponseMessage] = useState(null);

  const submitReview = async(event) => {
    event.preventDefault();

    try {
      const newReview = {
        gameID: parseInt(gameID), 
        userId: parseInt(savedUserID),
        rating,
        summary,
      }

      const response = await fetch(`/api/users/${savedUserID}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${savedUserToken}`,
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok == true) {
       setResponseMessage(`Review posted successfully!`);
       setNewReview(newReview);
      }
      else {
        setResponseMessage(`Error when posting review.`);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  return <form className="column-flex">
    <h3>Write a review:</h3>

    <label>
      Rating ({rating} {(rating > 1) ? `stars` : `star`}): <input required type="range" min={1} max={5} value={rating} onChange={(event) => {
        setRating(event.target.value);
      }} />
    </label>

    <label>
      Summary: <textarea onChange={(event) => {
        setSummary(event.target.value);
      }}></textarea>
    </label>

    <button onClick={(event) => {submitReview(event)}}>Submit Review</button>
    {responseMessage && <p>{responseMessage}</p>}
  </form>
}

export default WriteReviewForm;