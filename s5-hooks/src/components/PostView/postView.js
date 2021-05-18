import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comments from '../Comments/comments'

export default function PostView({id, title, body, userId}) {
  const [showComments, setShowComments] = useState('false')
 
  let emptyArray = []

  return (
    <div style={{textAlign: "left"}}>
        <h4>Title: {title}</h4>
        <p>Content: {body}</p>
        <button onClick={() => {setShowComments(!showComments)}}>Comments</button>
        {(!showComments) ? <Comments  id={id}/> : emptyArray }
    </div>
  );
}
 PostView.propTypes = {
     id: PropTypes.number,
     title: PropTypes.string,
     body: PropTypes.string,
     userId: PropTypes.number,

}
