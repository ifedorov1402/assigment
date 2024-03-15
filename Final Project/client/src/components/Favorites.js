import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './NewsFeed.css'
import { UserContext } from '../context/UserProvider';

const Favorites = () => {
   
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {favorites, fetchFavorites,handleDeleteFavorite} = useContext(UserContext)
    useEffect(() => {
        fetchFavorites();
    }, []);

    //delete

    // const handleDeleteFavorite = async (id) => {
    //     try {
    //         await axios.delete(`/api/favorites/${id}`);
    //         setFavorites(favorites.filter(fav => fav._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting favorite:', error);
    //     }
    // };
    


console.log(favorites)
    return (
        <div>
            <h1>Your Favorites</h1>
            <ul className="news-feed">
                {favorites.map(fav => (
                    <li key={fav._id} className="news-item">
                        {fav.imageUrl && <img src={fav.imageUrl} alt={fav.title} />}
                        <h2>{fav.title}</h2>
                        <p>{fav.description}</p>
                        <p>Published on: {fav.publishedAt}</p>
                        <a href={fav.url} target="_blank" rel="noopener noreferrer">Read full article</a>
                        <button onClick={() => handleDeleteFavorite(fav._id)}>Delete from Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
