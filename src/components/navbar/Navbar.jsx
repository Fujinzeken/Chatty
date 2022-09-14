import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
    <span className='logo-name'>Chatty</span>
    <div className='user'>
      <img className='navbar-image' src='https://images.unsplash.com/photo-1662758949073-56537345d85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
       alt=''/>
      <span className='user-name'>Mikol</span>
      <button className='btn'>Log out</button>
    </div>
      
    </div>
  )
}

export default Navbar
