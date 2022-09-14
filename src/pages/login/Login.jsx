import React from 'react'
import "./login.css"


function Login() {
  return (
    <div>
      <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Chatty</span>
        <span className='title'>Log in</span>
            <form>
                <input className='input' type='email' placeholder='Enter email'/>
                <input className='input' type='password' placeholder='Enter password'/>
                <button className='login-btn'>Get Chatty</button>
            </form>
            <p className='p-tag'>Don't have an account? Register </p>
        </div>
      </div>
    </div>
  )
}

export default Login
