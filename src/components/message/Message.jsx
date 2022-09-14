import React from 'react'
import "./message.css"

function Message() {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img className='messageInfo_img' src='https://images.unsplash.com/photo-1662758949073-56537345d85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' 
        alt=''/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p className='messageContentMessage'>Hello</p>
        <img className='messageContent_img' src='https://images.unsplash.com/photo-1662758949073-56537345d85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' 
        alt=''/>
      </div>
    </div>
  )
}

export default Message
