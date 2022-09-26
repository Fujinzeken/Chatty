import { signOut } from 'firebase/auth'
import { auth } from "../../Firebase";
import React, { useContext } from 'react'
import "./navbar.css"
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const logout = ()=>{
    signOut(auth)
  }

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
    <span className='logo-name'>Chatty</span>
    <div className='user'>
      <img className='navbar-image' src={currentUser.photoURL}
       alt=''/>
      <span className='user-name'>{currentUser.displayName}</span>
      <button className='btn' onClick={logout}>Log out</button>
    </div>
      
    </div>
  )
}

export default Navbar
