import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AllFrontend from './AllFrontend';

const Work = () => {
  
  return (
    <div className='w-full overflow-x-hidden flex flex-col max-xs:px-0 max-phone:gap-0 px-8 gap-10'>
        <h2 className='text-xl no-scrollbar max-xs:px-8'>Work</h2>
        <AllFrontend/>     
        <div className='  flex justify-center  max-xs:pb-10 max-xs:pt-4 '>
            <Link to="/work" 
              style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
              className=' uppercase border border-[black] py-4 px-7 flex items-center justify-center  text-sm font-black rounded-full hover:bg-[#1F2024] hover:text-[#FEFEFE]'>
                all work
            </Link>
        </div>        
    </div>
  )
}

export default Work