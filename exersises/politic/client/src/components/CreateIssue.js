import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function CreateIssue() {
  const [inputs, setInputs] = useState({ title: '', description: '' });
  const { addIssue } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIssue(inputs);
    // Optionally reset form or give user feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Issue Title"
        required
      />
      <textarea
        name="description"
        value={inputs.description}
        onChange={handleChange}
        placeholder="Issue Description"
        required
      />
      <button type="submit">Submit Issue</button>
    </form>
  );
}
