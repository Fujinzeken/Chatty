import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import "./chats.css"
import { db } from '../../Firebase';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

function Chats() {
  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)
  const [chats, setChats]= useState([])

  useEffect(()=>{
    const getChats=()=>{
      const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
        setChats(doc.data());
        //convert initial chats object to array
        // console.log(Object.entries(chats))
    });
  
    return ()=>{unsub()}
    }
    currentUser.uid && getChats()
  }, [chats, currentUser.uid])

  const handleSelect = (u)=>{
    dispatch({type:"CHANGE_USER", payload:u})
  }


  return (
    <div className='chats'>
    {Object.entries(chats)?.sort((a, b)=>b[1].date-a[1].date).map((chat)=>{
      return (<div className='user-chat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img className='search-image' src={chat[1].userInfo.photoURL}
        alt=''/>
        <div className='user-chat-info'>
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      </div>)
    })}
      
    </div>
  )
}

export default Chats
