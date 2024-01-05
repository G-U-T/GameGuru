import {React, useState} from "react";

const WriteCommentForm = ({reviewID, savedUserID, savedUserToken, setNewComment}) => {
  const [commentText, setCommentText] = useState(``);
  const [responseMessage, setResponseMessage] = useState(null);

  const submitComment = async(event) => {
    event.preventDefault();

    try {
      const newComment = {
        reviewsId: parseInt(reviewID), 
        userId: parseInt(savedUserID),
        comment_text: commentText,
      }

      const response = await fetch(`/api/comments/reviews/${reviewID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${savedUserToken}`,
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok == true) {
       setResponseMessage(`Comment posted successfully!`);
       setNewComment(newComment);
      }
      else {
        setResponseMessage(`Error when posting comment.`);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  return <>
  {savedUserID ? (
  <form className="column-flex" style={{justifyContent: "normal"}}>
    <h3>Reply to this review:</h3>

    <label className="row-flex">
      Comment text: <textarea onChange={(event) => {
        setCommentText(event.target.value);
      }}></textarea>
    </label>

    <button onClick={(event) => {submitComment(event)}}>Submit Comment</button>
    {responseMessage && <p>{responseMessage}</p>}
  </form>) : (
  <h2>Log in to leave a comment!</h2>
  )}
</>
}

export default WriteCommentForm;