import { Link, useLocation, useParams } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react';
import { NavigationContext } from '../Home/home';

export default function AlbumView({newData = false, id, title}) {
    const { navigateTo } = useContext(NavigationContext);
    const [newAlbum, setNewAlbum] = useState(null);

    let location = useLocation()
    let params = useParams()
    const {state} = location;

    const fetchNewAlbum = () => 
        fetch(`https://jsonplaceholder.typicode.com/albums/${params?.id}`)
        .then(response => response.json())
        .then(data => setNewAlbum(data))

    useEffect(() => {
        if(params?.id) {
            fetchNewAlbum();
        }
        }, [state?.title]);

  

  console.log(location, params)
    return(
    <div style={{ textAlign: "left" }}>
        {!newData ? (
        <>
            <Link to={{pathname: `/albums/${id}`, state: {title, id}}}>
            Show details
            </Link>
        
            <h4>Title: {title}</h4>
        </>
        ) : (
        <>
            <h3>New album details</h3>
            <h4>Title: {state?.title || newAlbum?.title}</h4>

        </>
        )}
    </div>
    )
}