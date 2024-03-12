import React from 'react'

const Socials = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__slow w-full h-screen bg-[#FEFEFE] text-[#1F2024] overflow-x-hidden flex flex-col    px-10  '>
      
        <div className='h-[20vh] shrink-0 w-full border-b border-[#6D6E77]  flex items-center justify-center pr-12'>
          <div className=' w-fit  flex justify-center  gap-8 '>
            <div className='h-[12vh] w-[12vh] rounded-full '>
              <img className='object-cover object-center h-full w-full ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />
            </div>
            <h1 className='no-scrollbar flex items-center tracking-wide text-[#1F2024] font-bold text-xm uppercase'>or connect with me on socials</h1>
          </div>
        </div>

        <div className='h-full w-full  flex flex-col items-center justify-evenly '>
            <a href='https://www.linkedin.com/in/jatin-ahirwar-16264820b/' className='text-9xl border-b-4 rounded border-[#6D6E77] h-[20vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>LinkedIN</a>
            <a href='https://github.com/Jatin-Ahirwar' className='text-9xl border-b-4 rounded border-[#6D6E77] h-[20vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>GitHub</a>
            <a href='' className='text-9xl border-b-4 rounded border-[#6D6E77] h-[20vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>Instagram</a>
        </div>


    </div>
  )
}

export default Socials