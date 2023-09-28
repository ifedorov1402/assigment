import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

export default function App() {
  const [colorsData, setColorData] = React.useState({})
  const [count, setCount] = React.useState(1)
  
  React.useEffect(function() {
      console.log("Effect ran")
      fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
          .then(res => res.json())
          .then(data => setColorData(data.colors[0].hex))
  }, [count])
  const style = { backgroundColor: `#${colorsData}`}

  
  return (
      <div style ={style}>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
          <pre>{JSON.stringify(colorsData, null, 2)}</pre>
      </div>
  )
}


