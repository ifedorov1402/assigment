import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './Badge'
import React from 'react'
export default function App() {
  const [formData, setFormData] = React.useState({
      fname: "",
      email: "",
      telephone: "",
      lname: "",
      pBirth: "",
      favFood: "",
      about:""
      
  })
  const [badges, setBadges] = useState([]);

  function handleChange(event) {
      const {name, value} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
      }))
  }
  
  function handleSubmit(event) {
      event.preventDefault()
//Validation of 3 characters
    const isfieldValid = (field) => field.trim().length >=3;
    const isFormValid = Object.values(formData).every(isfieldValid)
    if (!isFormValid) {
      alert('Each field must contain at least 3 character');
      return;
  }

      const isValidTelephone = /^[0-9]+$/.test(formData.telephone);

    if (!isValidTelephone) {
      alert('Telephone field should only contain numbers.');
      return;
  }
    const newBadge = { ...formData };
    setBadges((prevBadges) => [...prevBadges, newBadge]);

    setFormData({
      fname: '',
      email: '',
      telephone: '',
      lname: '',
      pBirth: '',
      favFood: '',
      about: '',
    });
  }
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className='imputF'>
            <div>
              <input 
                  type="text" 
                  placeholder="first name"
                  className="form--input"
                  name="fname"
                  onChange={handleChange}
                  value={formData.fname}
              />
              <input 
                  type="email" 
                  placeholder="Email address"
                  className="form--input"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
              />
              <input 
                  type="number" 
                  placeholder="telephone"
                  className="form--input"
                  name="telephone"
                  onChange={handleChange}
                  value={formData.telephone}
              />
              </div>
              <div>
              <input 
                  type="text" 
                  placeholder="last name"
                  className="form--input"
                  name="lname"
                  onChange={handleChange}
                  value={formData.lname}
              />
              <input 
                  type="text" 
                  placeholder="place of birth"
                  className="form--input"
                  name="pBirth"
                  onChange={handleChange}
                  value={formData.pBirth}
              />
              <input 
                  type="text" 
                  placeholder="Favarite Food"
                  className="form--input"
                  name="favFood"
                  onChange={handleChange}
                  value={formData.favFood}
              />
              </div>
              <input 
                  type="text" 
                  placeholder="tell about yourself"
                  className="text_input"
                  name="about"
                  onChange={handleChange}
                  value={formData.about}
              />

            </div>
           
              <button 
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
          {badges.length > 0 && (
            <div className="badge-container">
            <h2>Generated Badges</h2>
            {badges.map((badge, index) => (
            <Badge key={index} data={badge} />
          ))}
        </div>
          )}
      </div>
  )
}
