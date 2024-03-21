import React from 'react'

const Socials = () => {
  return (
    <div className='animate__animated max-phone:h-[70vh] animate__fadeIn animate__slow w-full h-screen bg-[#FEFEFE] text-[#1F2024] overflow-x-hidden flex flex-col max-phone:px-4 px-10  '>
      
        <div className='h-[20vh] max-md:mt-16 shrink-0 max-phone:h-[14vh] max-phone:mt-24 w-full border-b  max-phone:pr-0 border-[#6D6E77]  flex items-center justify-center pr-12'>
          <div className=' w-fit flex justify-center max-phone:gap-4 gap-8 '>
            <div className='max-phone:h-[7vh] max-phone:w-[7vh]  h-[12vh] w-[12vh] rounded-full '>
              <img className='object-cover object-center h-full w-full ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />
            </div>
            <h1 className='no-scrollbar flex items-center max-phone:text-sm tracking-wide text-[#1F2024] font-bold text-xm uppercase'>or connect with me on socials</h1>
          </div>
        </div>

        <div className='h-full w-full  flex flex-col items-center justify-evenly '>
            
            <a href='https://www.linkedin.com/in/jatin-ahirwar-16264820b/' 
              className='text-9xl max-phone:pb-12 max-phone:text-5xl max-md:text-8xl  max-sm:text-7xl max-md:h-fit border-b-4 rounded border-[#6D6E77] h-[20vh] max-phone:h-[6vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>
              LinkedIN
            </a>

            <a href='https://github.com/Jatin-Ahirwar' 
              className='text-9xl max-phone:pb-12 max-phone:text-5xl max-md:text-8xl  max-sm:text-7xl max-md:h-fit border-b-4 rounded border-[#6D6E77] h-[20vh] max-phone:h-[6vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>
              GitHub
            </a>

            <a href='' 
              className='text-9xl max-phone:pb-12 max-phone:text-5xl max-md:text-8xl  max-sm:text-7xl max-md:h-fit border-b-4 rounded border-[#6D6E77] h-[20vh] max-phone:h-[6vh] pb-8 text-[#1F2024] uppercase font-semibold overflow-y-hidden'>
              Instagram
            </a>

        </div>


    </div>
  )
}

export default Socials