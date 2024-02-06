// NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider.js'; // Adjust the path based on your project structure

export default function NavBar() {
  const { user, logout } = useContext(UserContext); // Assuming your UserContext provides this information

  return (
    <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create">Create Issue</Link>
        </div>
  );
}
