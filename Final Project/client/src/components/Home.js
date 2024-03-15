import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your News App!</h1>
      <p>Stay updated with the latest news and save your favorite articles for later reading.</p>
      
      <div className="home-buttons">
        <Link to="/news">
          <button className="btn btn-news">Go to News Feed</button>
        </Link>
        <Link to="/favorites">
          <button className="btn btn-favorites">View Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;