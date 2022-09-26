import React, { useState, useContext } from 'react'
import "./sendMessages.css"
import pics from "../../image/pics_icon.png"
import attach from "../../image/attach_img.png"
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage,db } from '../../Firebase'


function SendMessages() {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const handleSend = async()=>{
    if(img){
      const storageRef = ref(storage, uuid())

      const uploadTask = uploadBytesResumable(storageRef, img)

      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateDoc(doc(db, "chats", data.chatId),{
          messages:arrayUnion({
            id: uuid(),
            text,
            senderId:currentUser.uid,
            date:Timestamp.now(),
            img:downloadURL
          })
        })
    }
  );
    }else{
await updateDoc(doc(db, "chats", data.chatId),{
  messages:arrayUnion({
    id: uuid(),
    text,
    senderId:currentUser.uid,
    date:Timestamp.now(),
  })
})
    }

    await updateDoc(doc(db, "userChat",currentUser.uid ),{
      [data.chatId+".lastMessage"]:{
        text 
      },
      [data.chatId+".date"]:serverTimestamp()
    });
    await updateDoc(doc(db, "userChat",data.user.uid ),{
      [data.chatId+".lastMessage"]:{
        text 
      },
      [data.chatId+".date"]:serverTimestamp()
    });
    setText("")
    setImg(null)

  }
  return (
    <div className='sendMessages'>
      <input className='send-messages-input' type='text' placeholder='Enter message...' onChange={e=>setText(e.target.value)}
        value={text}
      />
      <div className='send'>
        <img className='send-icons' src={attach} alt=''/>
        <input type='file' style={{display:"none"}} id='file' onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img className='send-icons' src={pics} alt=''/>
        </label>
        <button className='send-btn' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default SendMessages
