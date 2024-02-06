import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsFeed.css'

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('/api/favorites');
                setFavorites(response.data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    //delete

    const handleDeleteFavorite = async (id) => {
        try {
            await axios.delete(`/api/favorites/${id}`);
            setFavorites(favorites.filter(fav => fav._id !== id));
        } catch (error) {
            console.error('Error deleting favorite:', error);
        }
    };
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading favorites.</div>;


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
