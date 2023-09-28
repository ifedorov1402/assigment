import { useState } from 'react'
import  React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [formData, setFormData] = React.useState({
      text: ""

  })
  const [items, setItems] = useState([]);
  
  
  function handleChange(event) {
      const {name, value} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name] : value
      }))

  }
  
  function handleSubmit(event) {
      event.preventDefault()
      setItems((prevItems) => [...prevItems, formData.text]); 
      setFormData({ text: "" })
  }
  console.log(items)
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input 
                  type="text"
                  placeholder="text"
                  className="form--input"
                  name="text"
                  onChange={handleChange}
                  value={formData.text}
              />
              <h1>{formData.text}</h1>
      
             
              <button 
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
          <ul>
            {items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}

          </ul>
      </div>
  )
}
