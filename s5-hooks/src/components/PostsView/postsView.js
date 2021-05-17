import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PostView from '../PostView/postView';

export default function PostsView({ posts }) {

    //se randeaza cand se modifica lista de posts
    useEffect(() => {
        console.log('render PostsView list')
    }, [posts])

  return (
    <div style={{padding: 16 }}>
        {posts.map((post) => (
            <PostView key={post.id} {...post} />))};
    </div>
  )
}

PostsView.propTypes = {
    posts: PropTypes.array.isRequired,
}
