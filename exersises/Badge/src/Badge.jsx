import React from 'react';

function Badge({ data }) {
  return (
    <div className="badge">
      <h2>Badge Information</h2>
      <p>First Name: {data.fname}</p>
      <p>Email: {data.email}</p>
      <p>Telephone: {data.telephone}</p>
      <p>Last Name: {data.lname}</p>
      <p>Place of Birth: {data.pBirth}</p>
      <p>Favorite Food: {data.favFood}</p>
      <p>About: {data.about}</p>
    </div>
  );
}

export default Badge;