import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { asyncSingleUiux } from '../../Store/Actions/UiuxActions';

const SingleUiUx = () => {

    const springProps = {
        type: 'spring',
        stiffness: 1000,
        damping: 300,
    };
    const dispatch = useDispatch()

    const { uiuxid } = useParams();
    useEffect(()=>{
        dispatch(asyncSingleUiux(uiuxid))
    },[])

    

    const { singleuiux } = useSelector((state)=>state.UiUx)

    return (
        <div className='animate__animated animate__fadeIn animate__slow w-full overflow-x-hidden flex flex-col pt-24 pb-8 px-8  max-phone:px-4 max-sm:gap-6 gap-10'>                  

            <h1 className='no-scrollbar animate__animated animate__slideInDown max-phone:text-6xl capitalize py-2 tracking-normal font-bold text-8xl'>{singleuiux?.projectName}</h1>

            <div className='h-[20vh] max-sm:h-full flex  max-sm:gap-6 w-full max-sm:flex-col items-center gap-10  max-sm:items-start '>

                <div className='h-full w-1/5 max-sm:w-full  /'>
                    <div className='h-1/2 w-full max-sm:mb-2 max-sm:h-[5vh]  flex items-center text-[#707073] border-b-2 font-normal tracking-wide '>
                        ROLE / SERVICES
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider uppercase'>
                        {singleuiux?.projectType}
                    </div>
                </div>

                <div className='h-full w-1/5  max-sm:w-full /'>
                    <div className='h-1/2 w-full max-sm:mb-2 max-sm:h-[5vh] flex items-center text-[#707073] border-b-2 font-normal tracking-wide '>
                        BRAND / TITLE
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider uppercase'>
                        {singleuiux?.projectTitle}
                    </div>
                </div>

                <div className='h-full w-1/5  max-sm:w-full'>
                    <div className='h-1/2 w-full max-sm:mb-2 max-sm:h-[5vh] flex items-center text-[#707073] border-b-2 font-normal tracking-wide'>
                        SOCIALS 
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider'>
                        {/* Example social media links */}
                        <a href={singleuiux?.linkedin} target='_blank' rel='noopener noreferrer' className='mr-4'>
                            LinkedIn
                        </a>
                        <a href={singleuiux?.linkedin} target='_blank' rel='noopener noreferrer' className='text-gray-800'>
                            GitHub
                        </a>
                    </div>
                </div>

                <motion.a 
                    href={singleuiux?.deployement}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    {...springProps}                
                    className='no-scrollbar  overflow-y-hidden max-sm:h-[5vh] max-sm:w-[15vh]  h-[18vh] w-[18vh] F2024] rounded-full bg-[#1F2024] justify-center flex gap-1 items-center '
                >    
                    <i class="ri-share-forward-line text-[#FCFCFC] "></i>
                    <h6 className='uppercase text-[#FCFCFC] text-xs'>Visit Site</h6>
                </motion.a>


            </div>

            <div className='w-full  flex flex-col gap-8'>
                <img className='h-[100vh] max-phone:h-[40vh] w-full object-cover ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />               
                <p className='text-2xl w-[70vw]  leading-10 tracking-wider '>{singleuiux?.aboutProject}</p>
            </div>  

            
            {singleuiux?.images.map((image,index)=>(
                <img key={index} className='h-[100vh] w-[100%] max-phone:h-[40vh] object-cover ' src={image.url} alt="" />               
            ))}


        </div>            
    )
}

export default SingleUiUx