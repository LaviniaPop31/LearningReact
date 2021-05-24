import React, {useState, useContext} from 'react'


const CommentsContext = React.createContext();

export function useComments() {
    return useContext(CommentsContext)
}

export function CommentsProvider({ children}) {
    const  [comments, setComments] = useState([])

    const fetchComments = (id) =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data));


const value = {
    comments,
    setComments,
    fetchComments
}


return (
    <CommentsContext.Provider value={value}>
       {children}
   </CommentsContext.Provider>
)

}