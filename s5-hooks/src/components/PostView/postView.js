import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comments from '../Comments/comments'
import {CommentsProvider} from '../../context/CommentsContext'


export default function PostView({id, title, body, userId}) {
  const [showComments, setShowComments] = useState('false')
 
  return (
    <div style={{textAlign: "left"}}>
        <h4>Title: {title}</h4>
        <p>Content: {body}</p>
        <button onClick={() => {setShowComments(!showComments)}}>Comments</button>
        {(!showComments) ? <CommentsProvider><Comments id={id} /></CommentsProvider> : null}
    </div>
  );
}
 PostView.propTypes = {
     id: PropTypes.number,
     title: PropTypes.string,
     body: PropTypes.string,
     userId: PropTypes.number,

}
