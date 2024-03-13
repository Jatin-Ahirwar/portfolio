import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import AllFrontend from './AllFrontend';

const Work = () => {
  const scrollToAllWork = () => {
    allWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full overflow-x-hidden flex flex-col px-8 gap-10'>
        <h2 className='text-xl no-scrollbar'>Work</h2>
        <AllFrontend/>     
        <div className='flex justify-center '>
            <Link to="/work" 
              onClick={scrollToAllWork}
              style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
              className='uppercase  border border-[black]  h-[7vh] w-[9vw] flex items-center justify-center  text-sm font-black rounded-full hover:bg-[#1F2024] hover:text-[#FEFEFE]'>
                all work
            </Link>
        </div>    
        {/* <div className='w-full  flex flex-col justify-center'>

              <div className='h-[40vh] shrink-0  w-full border-b border-[#D8DADE] px-16 flex items-center justify-between'>
                <div className='h-full w-fit flex flex-col justify-center gap-4 ] '>
                  <div className='p-2 w-[18vw]  bg-[#D8DADE] flex justify-center items-center'>
                    <p className=' uppercase font-medium tracking-normal'>Fintech Mobile application</p>
                  </div>
                  <h1 className='no-scrollbar capitalize h-[12vh] tracking-normal font-bold text-7xl'>Product Photography</h1>
                </div>
                <h1 className='capitalize text-xl text-[#BFC6C4]'>design & animation</h1>
              </div>

              <div className='h-[40vh] shrink-0 w-full border-b border-[#D8DADE] px-16 flex items-center justify-between'>
                <div className='h-full w-fit flex flex-col justify-center gap-4 ] '>
                  <div className='p-2 w-[18vw]  bg-[#D8DADE] flex justify-center items-center'>
                    <p className=' uppercase font-medium tracking-normal'>Fintech Mobile application</p>
                  </div>
                  <h1 className='no-scrollbar capitalize h-[12vh] tracking-normal font-bold text-7xl'>Product Photography</h1>
                </div>
                <h1 className='capitalize text-xl text-[#BFC6C4]'>design & animation</h1>
              </div>

              <div className='h-[40vh] shrink-0 w-full border-b border-[#D8DADE] px-16 flex items-center justify-between'>
                <div className='h-full w-fit flex flex-col justify-center gap-4 ] '>
                  <div className='p-2 w-[18vw]  bg-[#D8DADE] flex justify-center items-center'>
                    <p className=' uppercase font-medium tracking-normal'>Fintech Mobile application</p>
                  </div>
                  <h1 className='no-scrollbar capitalize h-[12vh] tracking-normal font-bold text-7xl'>Product Photography</h1>
                </div>
                <h1 className='capitalize text-xl text-[#BFC6C4]'>design & animation</h1>
              </div>

              <div className='h-[40vh] shrink-0 w-full border-b border-[#D8DADE] px-16 flex items-center justify-between'>
                <div className='h-full w-fit flex flex-col justify-center gap-4 ] '>
                  <div className='p-2 w-[18vw]  bg-[#D8DADE] flex justify-center items-center'>
                    <p className=' uppercase font-medium tracking-normal'>Fintech Mobile application</p>
                  </div>
                  <h1 className='no-scrollbar capitalize h-[12vh] tracking-normal font-bold text-7xl'>Product Photography</h1>
                </div>
                <h1 className='capitalize text-xl text-[#BFC6C4]'>design & animation</h1>
              </div>
          
              <div className='flex justify-center items-start pt-4 h-[35vh] '>
                <Link to="/work" 
                  style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
                  className='uppercase  border-2 border-black px-8 py-4 text-sm font-black rounded-full hover:bg-[#1F2024] hover:text-[#FEFEFE]'>
                    all work
                  </Link>
              </div>

        </div> */}
    
    </div>
  )
}

export default Work