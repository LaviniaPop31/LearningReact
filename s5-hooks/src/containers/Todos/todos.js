import React, { useEffect, useState, useContext } from 'react'
import { ALBUM_ROUTE } from '../../routes'
import { NavigationContext} from "../Home/home"

export default function Todos() {
    const[todos, setTodos] = useState([])

    const {path, navigateTo } =  useContext(NavigationContext)

    const fetchTodos = () => 
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => setTodos(data))

    useEffect(() => {
        fetchTodos()
    }, [])
    


  return (
    <div style={{ textAlign: "left", padding: 50 }}>
      <h4>Todos</h4>
      <button onClick={navigateTo(ALBUM_ROUTE)}>Go to albums</button>
      {todos.map(({ id, title, completed }) => (
        <div key={id}>{`Title: ${title}`} 
            <div>{completed ? "Completed" : "Waiting"}</div>
        </div>
      ))}
    </div>
    
  );
}


