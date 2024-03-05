import React from 'react'
import Nav from './Components/Nav'
import './index.css'; 
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-full h-screen bg-[#FCFCFC]'>
        <Nav />
        <Routes>
          <Route path='/' element={""}/>
          <Route path='/work' element={""}/>
          <Route path='/about' element={""}/>
          <Route path='/contact' element={""}/>
        </Routes>
    </div>
  )
}   

export default App