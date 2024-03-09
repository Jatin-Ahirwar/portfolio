import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  
  return (
    <div className='h-[90vh] w-screen flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold py-4'>OOPS Requested Url Not Found !</h1>
        <Link
        to="/"
        style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
        className='   border-2 border-black px-8 py-3  font-black rounded-full hover:bg-[#1F2024] hover:text-[#FEFEFE] uppercase text-xl tracking-wider'>Home</Link>        
    </div>

  )
}

export default NotFound