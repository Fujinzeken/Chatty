import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import "./message.css"

function Message({message}) {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext)

  console.log(message);
  const ref = useRef()
  useEffect(()=>{
    ref.current?.scrollIntoView({behaviour:"smooth"})
  }, [message])
  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`} ref={ref}>
      <div className='messageInfo'>
        <img className='messageInfo_img' src={message.senderId === currentUser.uid
        ? currentUser.photoURL
        :data.user.photoURL} 
        alt=''/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p className='messageContentMessage'>{message.text}</p>
        {message.img && 
          <img className='messageContent_img' src={message.img}
        alt=''/>}
      </div>
    </div>
  )
}

export default Message
