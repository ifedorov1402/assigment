import React, { useEffect, useState } from 'react';
import IssueItem from './IssueItem';
import { userAxios } from '../context/UserProvider'; // Adjust import based on your setup

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    userAxios.get('/api/issues')
      .then(response => setIssues(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {issues.map(issue => (
        <IssueItem key={issue._id} issue={issue} />
      ))}
    </div>
  );
}
