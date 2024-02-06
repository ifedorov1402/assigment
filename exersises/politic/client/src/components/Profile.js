// Profile.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';
import { useNavigate } from 'react-router-dom';



  export default function Profile() {
    const { user, addIssue } = useContext(UserContext);
    const navigate = useNavigate(); // For navigation
    const [issue, setIssue] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssue(prevIssue => ({ ...prevIssue, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIssue(issue).then(() => {
            navigate('/path-after-success'); // Adjust as necessary
        }).catch(error => {
            console.error("Error creating issue:", error);
            // Optionally handle the error, e.g., show an error message
        });
    };



  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={issue.title}
          onChange={handleChange}
          placeholder="Issue Title"
          required
        />
        <textarea
          name="description"
          value={issue.description}
          onChange={handleChange}
          placeholder="Issue Description"
          required
        />
        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
}
