import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Comments from '../Comments/comments'
import {CommentsProvider} from '../../context/CommentsContext'
import { SINGLE_POST } from '../../routes'
import { NavigationContext } from '../../containers/Home/home'
import { Link, useLocation, useParams } from 'react-router-dom'


export default function PostView({id, title, body, userId, newData = false}) {
  const { navigateTo } = useContext(NavigationContext);

  const [newPost, setNewPost] = useState(null);

  let location = useLocation()
  let params = useParams()
  const {state} = location;

  const fetchNewData = () =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
    .then((response) => response.json())
    .then((data) => setNewPost(data));

  useEffect(() => {
    if(params?.id) {
      fetchNewData();
    }
  }, [state?.title]);

    console.log(location, params)
  return (
    <div style={{ textAlign: "left" }}>
    {!newData ? (
      <>
        <Link to={{pathname: `/posts/${id}`, state: {title, body, id}}}>
          Show details
        </Link>
      
        <h4>Title: {title}</h4>
        <p>Content: {body}</p>
      </>
    ) : (
      <>
        <h3>New post details</h3>
        <h4>Title: {state?.title || newPost?.title}</h4>
        <p>Content: {state?.body || newPost?.body}</p>
      </>
    )}
  </div>
  );
}
 PostView.propTypes = {
     id: PropTypes.number,
     title: PropTypes.string,
     body: PropTypes.string,
     userId: PropTypes.number,

}
