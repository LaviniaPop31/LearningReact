import React, {useState, useContext, useMemo} from 'react'

const PostsContext = React.createContext();

// folosesc useContext pt a expune PostContext
// e un hook custom pt ca foloseste useContext(hook)
export function usePosts() {
    return useContext(PostsContext)
}

export function PostProvider({ children}) {
    const[posts, setPosts] = useState([])
    const [searchParam, setSearchParam] = useState('')

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }

    const filteredPosts = useMemo(() => {
        if (!searchParam) {
            return posts;
        }
        return posts.filter(({body}) => body.includes(searchParam))
    }, [searchParam, posts])

    const value = {
        posts,
        filteredPosts,
        fetchPosts,
        searchParam,
        setSearchParam

    }
// Provider primeste value, iar cand value se schimba, componenta se rerandeaza din nou(ea si copiii ei)
    return (
         <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}