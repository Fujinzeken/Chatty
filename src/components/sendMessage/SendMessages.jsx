import React from 'react'
import "./sendMessages.css"
import pics from "../../image/pics_icon.png"
import attach from "../../image/attach_img.png"

function SendMessages() {
  return (
    <div className='sendMessages'>
      <input className='send-messages-input' type='text' placeholder='Enter message...'/>
      <div className='send'>
        <img className='send-icons' src={attach} alt=''/>
        <input type='file' style={{display:"none"}} id='file'/>
        <label htmlFor='file'>
          <img className='send-icons' src={pics} alt=''/>
        </label>
        <button className='send-btn'>Send</button>
      </div>
    </div>
  )
}

export default SendMessages
