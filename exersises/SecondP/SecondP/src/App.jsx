import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Navbar from './assets/Navbar'
import Data from './assets/Data'
export default function App() {
  const cards = Data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}