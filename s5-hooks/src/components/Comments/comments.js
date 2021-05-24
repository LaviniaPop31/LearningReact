import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {useComments} from '../../context/CommentsContext'

export default function Comments({id}) {

  const {comments, setComments, fetchComments} = useComments()

console.log(id)
      
  useEffect(() => {
    fetchComments(id)
  }, [])

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