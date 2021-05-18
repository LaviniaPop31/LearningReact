import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Comments({id}) {
  const  [comments, setComments] = useState([])
console.log('in comments')
console.log(id)
  const fetchComments = () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data));

      
  useEffect(() => {
    fetchComments()
  }, [id])

console.log(comments)
  return (
    <div style={{fontSize: 12}}>
      {comments.map((comment) => (
        <div key={comment.id}>
            <h5>Name: {comment.name}</h5>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
      ))}
    </div>
     
  );
}

Comments.propTypes = {};