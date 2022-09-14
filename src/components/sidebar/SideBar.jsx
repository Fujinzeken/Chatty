import React from 'react'
import Navbar from "../navbar/Navbar"
import Search from "../search/Search"
import Chats from "../chats/Chats"
import "./sidebar.css"

function SideBar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default SideBar
