import React, { useContext, useState } from 'react'
import "./search.css"
import { collection, query, where,getDocs,getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../../Firebase"
import {AuthContext} from "../../context/AuthContext"

function Search() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const {currentUser} = useContext(AuthContext)
  const handleSearch = async()=>{
    
// Create a reference to the cities collection
    const usersRef = collection(db, "Users");

// Create a query against the collection.
const q = query(usersRef, where("displayName", "==", username));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  try{
   
    setUser(doc.data())
   
  }catch(err){
    setError(true)
  }
});


  }


  const handleKey = (e)=>{
    e.key === 'Enter' && handleSearch()
  }
 
  const handleClick = async()=>{
    //check if the group(chat collection in firestore) exists or not, if not create new one
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    try{
    const res = await getDoc(doc(db, 'chats', combinedId))
    if (!res.exists()){
      //create new chat in chats collection
      await setDoc(doc (db, "chats", combinedId),{messages:[]})
      
      //create userChats
      //update the chats on the side of both current user and the person they are chating with.
      await updateDoc(doc(db, "userChat", currentUser.uid), {
        [combinedId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"]:serverTimestamp()
      });

      await updateDoc(doc(db, "userChat", user.uid), {
        [combinedId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL
        },
        [combinedId+".date"]:serverTimestamp()
      });
    }
    setUsername('')
    setUser(null)
      }catch(err){

      }
    // create user chats 
  }
  return (
    <div className='search'>
      <div className='search-form'>
        <input className='search-input' type='text' placeholder='Search...' value={username} 
         onChange={(e)=>{setUsername(e.target.value)
         if(e.target.value === ""){setUser(null)}}} onKeyDown={handleKey}/>
       
      </div>
      {error && <span>User not found</span>}
     {user && <div className='user-chat' onClick={handleClick}>
    
        <img className='search-image' src={user.photoURL} 
        alt=''/>
        <div className='user-chat-info'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search
