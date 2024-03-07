import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (    
    // <div className="fixed z-50 w-[100%] h-[10vh] flex items-center justify-between  px-10  bg-[#FCFCFC] ">
    <div className=" z-50 w-[100%] h-[10vh] flex items-center justify-between  px-10  bg-[#FCFCFC] ">
        <Link className='flex flex-col items-end  border border-zinc-500 px-3 ' to="/">
          {["JATIN","AHIRWAR"].map((item,index)=>(
            <p key={index} className='text-sm'>{item}</p>
          ))}
        </Link>
      <div className='w-[20vw] flex justify-between'>
        <Link to="/work">WORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}

export default Nav