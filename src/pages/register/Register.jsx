import React, { useState } from 'react'
import "./register.css"
import Add from "../../image/add_avatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from "../../Firebase";
import {uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 




function Register() {
  const [error, setError] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const photoURL = e.target[3].files[0]

// create user with firebase auth email and password
try{
  const res = await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, photoURL);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    // switch (snapshot.state) {
    //   case 'paused':
    //     console.log('Upload is paused');
    //     break;
    //   case 'running':
    //     console.log('Upload is running');
    //     break;
    // }
  }, 
  (error) => {
    setError(true)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      })
      await setDoc(doc(db, "Users", res.user.uid), {
        uid:res.user.uid,
        displayName,
        email,
        photoURL: downloadURL
      });
    });
  }
);

}catch(err){
  setError(true)
  console.log(err);
}
 
  }


  return (
    <div>
      <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Chatty</span>
        <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input className='input' type='text' placeholder='Enter username'/>
                <input className='input' type='email' placeholder='Enter email'/>
                <input className='input' type='password' placeholder='Enter password'/>
                <label htmlFor='file'>
                  <img src={Add} alt=''/>
                  <span className='upload-label'>Add an Avatar</span>
                </label>
                <input type='file' id='file' style={{display:"none"}}/>
                <button className='reg-btn'>Get Chatty</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p className='p-tag'>Already have an account? Login </p>
        </div>
      </div>
    </div>
  )
}

export default Register
