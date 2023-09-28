import React from 'react';

export default function DiceBox(props) {
 

  return (
    <div>
      <h2>Dice Box</h2>
      {props.number.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
}