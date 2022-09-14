import React from 'react'
import "./chatpage.css"
import Add from "../../image/Add_contact.png"
import more from "../../image/more.png"
import Video from "../../image/Video.png"
import Messages from '../messages/Messages'
import SendMessages from '../sendMessage/SendMessages'

function ChatPage() {
  return (
    <div className='chatpage'>
      <div className='chatPage-info'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img  className='icon-img' src={Video} 
          alt=''/>
          <img className='icon-img'  src={Add} 
          alt=''/>
          <img  className='icon-img' src={more} 
          alt=''/>
        </div>
      </div>
      <Messages />
      <SendMessages />
    </div>
  )
}

export default ChatPage
