import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen bg-[#1F2024] overflow-x-hidden flex flex-col  px-10  '>
      
        <div className='h-[35vh] shrink-0 w-full border-b border-[#6D6E77]  flex items-center justify-between pr-12'>
          <div className='h-full w-fit flex  justify-center items-center gap-8 '>
            <div className='h-[15vh] w-[15vh] rounded-full '>
              <img className='object-cover object-center h-full w-full ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />
            </div>
            <h1 className='no-scrollbar h-[12vh] tracking-normal text-[#D3D3D3] font-bold text-6xl'>Let's work together</h1>
          </div>
          <h1 className='uppercase text-xm tracking-wider text-[#6D6E77]'>send me a message</h1>
        </div>

        <a href='mailto:jatinahirwar1089@gmail.com' target='_blank' rel='noopener noreferrer' id='mail' className=' w-full  flex flex-col items-center justify-between'>
            <h1 className='text-[9rem] border-b-4 rounded border-[white] tracking-wider text-[#FEFEFE] h-[30vh] uppercase font-semibold overflow-y-hidden'  >hello@jatin</h1>
            <h1 className='text-[9rem] border-b-4 rounded border-[white] tracking-wider text-[#FEFEFE] h-[30vh] uppercase font-semibold overflow-y-hidden'  >jatin.com</h1>
        </a>
    </div>
  )
}

export default Footer