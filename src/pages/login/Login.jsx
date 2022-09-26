import React, { useState } from 'react'
import "./login.css"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase"


function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
 
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
      
    }catch(err){
      setError(true)
    }
  }
  return (
    <div>
      <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Chatty</span>
        <span className='title'>Log in</span>
            <form onSubmit={handleSubmit}>
                <input className='input' type='email' placeholder='Enter email'/>
                <input className='input' type='password' placeholder='Enter password'/>
                <button className='login-btn'>Get Chatty</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p className='p-tag'>Don't have an account? <Link to='/register'>Register </Link></p>
           
        </div>
      </div>
    </div>
  )
}

export default Login
