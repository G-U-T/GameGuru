import {React, useState} from "react";

const WriteReviewForm = () => {

  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState(``);

  // TODO: needs user id for /api/users/${}/reviews
  // also needs token for authorization
  const submitReview = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/users/${1}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating,
          summary,
        }),
      });
      console.log(response);
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
  </form>
}

export default WriteReviewForm;