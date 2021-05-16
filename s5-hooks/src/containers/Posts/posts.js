import React, {useEffect, useState, useMemo} from 'react'
import PostsView from '../../components/PostsView/postsView';
import SearchView from '../../components/SearchView/searchView';

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [searchParam, setSearchParam] = useState([])

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }

    // se executa de fiecare data cand se randeaza componenta
    // useEffect(() => {
    //  console.log('all states', searchParam)
    // })

     //se executa doar la prima randare, la montarea componentei
    useEffect(() => {
        fetchPosts()
    }, [])

    //se executa cand unul din elementele din [] se schimba (dependintele)
    // useEffect(() => {
    //   console.log(`some state: posts length: ${posts.length} search: ${searchParam}`)
    // }, [posts, searchParam])


    //varianta 1

    // useEffect(() => {
    //     if(!searchParam) {
    //         fetchPosts()
    //     } else {
    //         const filteredPosts = posts.filter(({body}) => body.includes(searchParam))   // {body} = post.body - destructurare
    //         setPosts(filteredPosts)
    //     }
    // }, [searchParam])

    //varianta 2 cu useMemo
    useEffect(() => {
        if(!searchParam) {
            fetchPosts()
        }
    }, [searchParam])

    // daca las functia simpla fara useMemo, aceasta se va executa de fiecare data
    const filteredPosts = useMemo(() => {
        if (!searchParam) {
            return posts;
        }
        return posts.filter(({body}) => body.includes(searchParam))
    }, [searchParam, posts])

  return (
    <>
        <SearchView search={searchParam} setSearch={setSearchParam} />
        <PostsView posts={posts} />
    </>
  );
}

Posts.propTypes = {

}
