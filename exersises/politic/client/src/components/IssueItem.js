import React from 'react';

export default function IssueItem({ issue }) {
  // Add functions to handle upvote and downvote here

  return (
    <div>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>
      {/* Display upvote and downvote buttons and handle clicks */}
    </div>
  );
}
