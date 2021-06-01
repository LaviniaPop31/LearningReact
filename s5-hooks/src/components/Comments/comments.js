import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {useComments} from '../../context/CommentsContext'

import {connect} from 'react-redux';
import {setComments} from '../../actions/comments'

export default function Comments(props) {
  
  const {id, comments} = props
  //const {comments, setComments, fetchComments} = useComments()

console.log(id)
console.log(props)
const fetchComments = () =>
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then((response) => response.json())
  .then((data) => 
    props.dispatchSetComments(data));
      
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

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments.list
  }
}

const mapDispatchToProps = {
  dispatchSetComments: setComments
}

Comments = connect(mapStateToProps, mapDispatchToProps)(Comments)