import { useState } from 'react'
import React from 'react';
import './App.css'
import DiceBox  from './DiceBox';

function App(props) {

  const [randomN, setRandom] = useState([])


  function generateRandomNumbers(){
    const randomDiceNumber = [];
    for (let i = 0; i < 5; i++) {
      randomDiceNumber.push(getRandom());
    }
    setRandom(randomDiceNumber)

  }
  function getRandom() {
    return Math.floor(Math.random() * 6); // Generates random numbers between 0 and 5
  }
  
  return (
    <div>
      <DiceBox number={randomN} />
      <button onClick={generateRandomNumbers}>Roll Dice</button>
    </div>
    
  )
}

export default App
