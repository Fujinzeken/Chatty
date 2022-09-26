import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../../Firebase'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../context/ChatContext'
import Message from '../message/Message'
import "./messages.css"
function Messages() {
  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext)

  console.log(data)
  // fetch messages from chat db using combinedId
  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
 
    })
    return()=>{unsub()}
  }, [data.chatId]) 
  console.log(messages);
  return (
    <div className='messages'>
    {messages.map((m)=>{
      return(
        <Message message={m} key={m.id}/>
      )
    })}
      
    </div>
  )
}

export default Messages
