import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import Register from './pages//register/Register'
import Login from './pages/login/Login'
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  const ProtectedRoutes = ({children})=>{
    if(!currentUser){
      return <Navigate to='/login' />
    }else{
      return children
    }
  }
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
