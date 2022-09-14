import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className='search'>
      <div className='search-form'>
        <input className='search-input' type='text' placeholder='Search...'/>
      </div>
      <div className='user-chat'>
        <img className='search-image' src='https://images.unsplash.com/photo-1662758949073-56537345d85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' 
        alt=''/>
        <div className='user-chat-info'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
