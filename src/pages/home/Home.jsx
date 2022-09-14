import React from 'react'
import "./home.css"
import SideBar from '../../components/sidebar/SideBar'
import ChatPage from '../../components/chatpage/ChatPage'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <SideBar />
        <ChatPage />
      </div>
    </div>
  )
}

export default Home
