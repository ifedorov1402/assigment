import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import NewsFeed from './components/NewsFeed.js';
import Favorites from './components/Favorites.js';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/favorites" element={<Favorites />} />
        
      </Routes>
      <footer>
        <p>© 2024 News Portal. All rights reserved.</p>
        <p>Contact: info@newsportal.com</p>
      </footer>
    </Router>
  );
};

export default App;