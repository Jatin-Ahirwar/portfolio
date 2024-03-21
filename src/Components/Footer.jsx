import React from 'react'

const Footer = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__slow w-full max-sm:h-[80vh] h-screen bg-[#1F2024] overflow-x-hidden flex flex-col max-phone:px-4  px-10  '>
      
        <div className='h-[35vh]  max-phone:h-[22vh] no-scrollbar overflow-hidden max-sm:h-[25vh]  max-sm:block max-sm:py-6 max-md:gap-6 max-lg:h-[25vh] shrink-0 w-full border-b border-[#6D6E77]  flex items-center justify-between max-sm:pr-0  pr-12'>
          <div className='h-full w-fit max-sm:h-fit  max-sm:mb-4 flex justify-center items-center gap-8 '>
            <div className='max-md:h-[10vh] max-md:w-[10vh]  max-phone:h-[8vh] max-phone:w-[8vh]  h-[13vh] w-[13vh] rounded-full '>
              <img className='object-cover object-center h-full w-full ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />
            </div>
            <h1 className='no-scrollbar flex items-center max-lg:text-5xl  max-sm:text-2xl max-md:text-3xl  h-[12vh] tracking-normal max-phone:text-[1.5rem] text-[#D3D3D3] font-bold text-6xl'>Let's work together</h1>
          </div>
          <h1 className='uppercase text-xm tracking-wider   text-[#6D6E77]'>send me a message</h1>
        </div>

        <a href='mailto:jatinahirwar1089@gmail.com' target='_blank' rel='noopener noreferrer' id='mail' 
          className='h-[60vh] w-full  flex flex-col items-center justify-center  '>
            <h1 className='max-lg:text-[7rem] max-md:text-[5.5rem] max-sm:text-[4.5rem] max-phone:text-[2.8rem] max-phone:h-[9vh] max-phone:mb-6 text-[9rem] border-b-4 rounded border-[white] tracking-wider text-[#FEFEFE] uppercase font-semibold overflow-y-hidden'  >hello@jatin</h1>
            <h1 className='max-lg:text-[7rem] max-md:text-[5.5rem] max-sm:text-[4.5rem] max-phone:text-[2.8rem] max-phone:h-[9vh] text-[9rem] border-b-4 rounded border-[white] tracking-wider text-[#FEFEFE] uppercase font-semibold overflow-y-hidden'  >jatin.com</h1>
        </a>

        <div className='h-[20vh] w-full max-sm:flex flex-col items-center justify-evenly hidden '>
          <h1 className='uppercase text-xm tracking-wider   text-[#6D6E77]'>socials</h1>
          <a href='https://www.linkedin.com/in/jatin-ahirwar-16264820b/' className='uppercase text-xm tracking-wider   text-[#FEFEFE]'>LinkedIN</a>
          <a href='https://github.com/Jatin-Ahirwar' className='uppercase text-xm tracking-wider  text-[#FEFEFE]'>github</a>
        </div>
        

    </div>
  )
}

export default Footer

