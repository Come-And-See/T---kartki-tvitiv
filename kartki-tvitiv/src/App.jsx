import React from 'react'
import './App.css'
import Home from './Page/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import NavLinks from './Components/NavLinks/NavLinks';
import Tweets from './Page/Tweets/Tweets';

function App() {


  return (
    <>

      <nav>
        <NavLinks />
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tweets' element={<Tweets/>} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>


    </>
  )
}

export default App
