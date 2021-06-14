import Albums from './containers/Albums/albums'
import Posts from './containers/Posts/posts'
import Todos from './containers/Todos/todos'
import { PostProvider } from './context/PostsContext'

export const ALBUM_ROUTE = '/albums' 

const appRoutes = [
    {
      path: ALBUM_ROUTE,
      title: 'Albums List',
      permissions: ['READ_ALBUMS', 'ADMIN'],
      render: () => <Albums />
    },
    {
        path: '/todos',
        title: 'Todos List',
        permissions: ['READ_TODOS', 'ADMIN'],
        render: () => <Todos />
    },
    {
      path: '/posts',
      title: 'Posts List',
      permissions: ['READ_POSTS', 'ADMIN'],
      render: () => (
        <PostProvider>
            <Posts />
          </PostProvider>
      )
    },
    {
        path: '/not-found',
        title: 'Not found',
        render: () => "Not found"
    }
  ]

export default appRoutes