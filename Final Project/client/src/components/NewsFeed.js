import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './NewsFeed.css'
import { UserContext } from '../context/UserProvider';
const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {handleFavoriteClick}= useContext(UserContext)
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('api/news/latest');
                setArticles(response.data.results); 
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

// FAVORITES
    function handleClick(article) {
        handleFavoriteClick(article)
    }



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading articles.</div>;

    return (
        <div>

            <ul className="news-feed">
                {articles.map(article => (
                    <li key={article.article_id} className="news-item">
                        {article.image_url && <img src={article.image_url} alt={article.title} />}
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <p>Published on: {article.pubDate}</p>
                        {article.creator && <p>By: {article.creator.join(', ')}</p>}
                        <a href={article.link} target="_blank" rel="noopener noreferrer">Read full article</a>
                        <button onClick={() => handleClick(article)}>Add to Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;