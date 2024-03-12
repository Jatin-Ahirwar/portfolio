import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncSingleBackend } from '../../Store/Actions/BackendActions';

const SingleBackend = () => {
    const springProps = {
        type: 'spring',
        stiffness: 1000,
        damping: 300,
    };
    const dispatch = useDispatch()
    const { backendid } = useParams();
    useEffect(()=>{
        dispatch(asyncSingleBackend(backendid))
    },[])

    const { singlebackend } = useSelector((state)=>state.Backend)


    return (
        <div className='animate__animated animate__fadeIn animate__slow w-full overflow-x-hidden flex flex-col pt-24 pb-8 px-8 gap-16'>                  

            <h1 className='no-scrollbar capitalize py-2 tracking-normal font-bold text-8xl'>{singlebackend?.projectName}</h1>
            {JSON.stringify(singlebackend)}

            <div className='h-[20vh] flex items-center gap-10  '>

                <div className='h-full w-1/5  /'>
                    <div className='h-1/2 w-full flex items-center text-[#707073] border-b-2 font-normal tracking-wide '>
                        ROLE / SERVICES
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider uppercase'>
                        {singlebackend?.projectType}
                    </div>
                </div>

                <div className='h-full w-1/5 /'>
                    <div className='h-1/2 w-full flex items-center text-[#707073] border-b-2 font-normal tracking-wide '>
                        BRAND / TITLE
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider uppercase'>
                        {singlebackend?.projectTitle}
                    </div>
                </div>

                <div className='h-full w-1/5'>
                    <div className='h-1/2 w-full flex items-center text-[#707073] border-b-2 font-normal tracking-wide'>
                        SOCIALS 
                    </div>
                    <div className='h-1/2 w-full flex items-center font-bold text-xm tracking-wider'>
                        {/* Example social media links */}
                        <a href={singlebackend?.linkedin} target='_blank' rel='noopener noreferrer' className='mr-4'>
                            LinkedIn
                        </a>
                        <a href={singlebackend?.linkedin} target='_blank' rel='noopener noreferrer' className='text-gray-800'>
                            GitHub
                        </a>
                    </div>
                </div>

                <motion.a 
                    href={singlebackend?.deployement}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    {...springProps}                
                    className='no-scrollbar overflow-y-hidden h-[18vh] w-[18vh] F2024] rounded-full bg-[#1F2024] justify-center flex gap-1 items-center '
                >    
                    <i class="ri-share-forward-line text-[#FCFCFC] "></i>
                    <h6 className='uppercase text-[#FCFCFC] text-xs'>Visit Site</h6>
                </motion.a>


            </div>

            <div className='h-screen w-full'>
                <img className='h-[100vh] w-[100%] object-cover ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />               
            </div>  

            <p className='text-2xl w-[70vw] leading-10 tracking-wider '>{singlebackend?.aboutProject}</p>
            
            {singlebackend?.images.map((image,index)=>(
                <img key={index} className='h-[100vh] w-[100%] object-cover ' src={image.url} alt="" />               
            ))}


        </div>            
    )
}

export default SingleBackend