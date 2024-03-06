import React from 'react'
import Nav from './Components/Nav'
import './index.css'; 
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Work from './Components/Work';

const App = () => {
  return (
    <div className='w-screen min-h-screen overflow-x-hidden bg-[#FCFCFC]'>
        <Nav />
        <Homepage />
        <Work />
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