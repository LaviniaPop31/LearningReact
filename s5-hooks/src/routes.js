import Albums from './containers/Albums/albums'
import Posts from './containers/Posts/posts'
import PostView from './components/PostView/postView'
import AlbumView from './containers/albumView/albumView'
import Todos from './containers/Todos/todos'
import { PostProvider } from './context/PostsContext'

export const ALBUM_ROUTE = '/albums' 
export const SINGLE_POST = "/posts/:id";
export const SINGLE_ALBUM = "/albums/:id"

const appRoutes = [
    {
      path: ALBUM_ROUTE,
      title: 'Albums',
      noHeader: false,
      permissions: ['READ_ALBUMS', 'ADMIN'],
      exact: true,
      render: (props) => <Albums {...props}/>
    },
    {
      path: '/todos',
      title: 'Todos',
      noHeader: false,
      permissions: ['READ_TODOS', 'ADMIN'],
      exact: true,
      render: (props) => <Todos {...props} />
    },
    {
      path: '/posts',
      title: 'Posts',
      noHeader: false,
      permissions: ['READ_POSTS', 'ADMIN'],
      exact: true,
      render: (props) => (
        <PostProvider>
            <Posts {...props}/>
          </PostProvider>
      )
    },
    {
      path: SINGLE_POST,
      title: "Post view",
      noHeader: true,
      permissions: ["READ_POSTS", "ADMIN"],
      render: (props) => <PostView {...props} newData />,
    },
    {
      path: SINGLE_ALBUM,
      title: "Album view",
      noHeader: true,
      permissions: ["READ_POSTS", "ADMIN"],
      render: (props) => <AlbumView {...props} newData />,
    },
    {
      path: '',
      title: 'Dashboard',
      exact: true,
      permissions: [],
      render: () => "Dashboard"
    }
  ]

export default appRoutes