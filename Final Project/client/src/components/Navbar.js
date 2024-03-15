import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = (props) => {
    const {logout} = props
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">NewsFeed</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <button onClick={logout}>Logout</button>
            </ul>
        </nav>
    );
};

export default Navbar;