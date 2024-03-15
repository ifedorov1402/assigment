import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      username, 
      password
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"
        className="auth-input"/>
      <input 
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"
        className="auth-input"/>
      <button className="auth-button">{ btnText }</button>
      <p className="auth-error" style={{color: "red"}}>{errMsg}</p>
    </form>
  )
}