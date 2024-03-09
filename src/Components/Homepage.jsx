import { motion , useSpring  } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Homepage = () => {    
    const springProps = {
        type: 'spring',
        stiffness: 1000,
        damping: 300,
    };

    const logos = [
        "https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png",
        "https://ik.imagekit.io/jatinahirwar/css-logo-black-and-white-removebg-preview.png?updatedAt=1709710538534",
        "https://ik.imagekit.io/jatinahirwar/kisspng-javascript-computer-icons-programming-language-nod-java-script-5b33c9afe3f1d2.1067225515301206239337-removebg-preview.png?updatedAt=1709711668854",
        "https://www.shareicon.net/data/2016/06/19/603784_nodejs_512x512.png",
        "https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png",
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
        "https://static-00.iconduck.com/assets.00/tailwind-icon-512x309-a8f1tun1.png",
        "https://ik.imagekit.io/jatinahirwar/png-transparent-figma-brands-icon-removebg-preview.png?updatedAt=1709711315351",
        "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",
        "https://ik.imagekit.io/jatinahirwar/png-transparent-redux-react-javascript-state-management-github-github-thumbnail-removebg-preview.png?updatedAt=1709711315334",
        "https://itsolution24x7.com/blog/wp-content/uploads/2020/06/socketio.png",
        "https://ik.imagekit.io/jatinahirwar/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail-removebg-preview.png?updatedAt=1709711315174",
        "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/VITE-VITE-900x0.png",
        "https://static-00.iconduck.com/assets.00/postman-icon-256x256-928z3ljk.png",
        "https://ik.imagekit.io/jatinahirwar/png-clipart-microsoft-visual-studio-express-computer-icons-microsoft-visual-c-visual-studio-code-studio-angle-studio-removebg-preview.png?updatedAt=1709711315212",
    ]

    return (
    <div className='w-full min-h-[100vh] overflow-x-hidden flex  px-8 pt-32 max-lg'>

        <div className=' w-[50vw] min-h-[200vh]  flex flex-col justify-between '>
            
            <div className='h-[40vh] '>
                <div className=' absolute  flex flex-col gap-4'>
                    <h1 className='text-9xl font-black overflow-y-hidden '>Full Stack Developer</h1>
                    <h1 className='text-[6rem] h-[20vh] italic capitalize overflow-y-hidden' >& ui/ux Designer</h1>
                </div>
            </div>

            <div className='w-full  flex justify-between pr-32'>
                    <div>
                        <h1 className='text-xl tracking-widest font-black'>LOCATED</h1>
                        <h1 className='text-xl tracking-widest font-black'>IN INDIA <span className='text-sm'>(ASIA)</span></h1>
                    </div>

                    <div>
                        <h1 className='text-xl tracking-widest font-black'>CURRENTLY AVAILABLE FOR</h1>
                        <h1 className='text-xl tracking-widest font-black'>WORK IN WORLDWIDE 🌎</h1>
                    </div>
            </div>

            <div className='h-[18vh]  flex flex-col justify-between pr-10'>
                    <h1>TECHNOLOGIES I WORK WITH</h1>
                    <div className='h-[12vh] overflow-x-auto w-full no-scrollbar flex gap-10 whitespace-nowrap'>
                        {logos.map((logo,index)=>(
                            <div key={index} className="shrink-0 h-full w-24  flex items-center justify-center border border-solid" >
                                <img className='object-cover h-3/6' src={logo} alt="" />
                            </div>
                        ))}
                    </div>
            </div>

            <div className='h-[10vh] w-[10vh] bg-[#ECECED] flex flex-col justify-center gap-1 items-center CECED] rounded-full'>
                <i class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar overflow-y-hidden"></i>
                <i class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center no-scrollbar overflow-y-hidden"></i>
                <i class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center no-scrollbar overflow-y-hidden"></i>
            </div>

            <div className='w-full pr-12 flex justify-between pt-8 pb-24  '>
                <p className='no-scrollbar font-normal text-lg w-3/5 tracking-normal'>
                    My expertise lies in creating compelling user experiences for early-stage startups, achieved by establishing a strong link between the unique requirements of the users and the business goals of the client.
                </p>
                <motion.div 
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    {...springProps}                
                    className='no-scrollbar overflow-y-hidden h-[20vh] w-[20vh] F2024] rounded-full bg-[#1F2024] justify-center flex gap-1 items-center '
                >    
                    <i class="ri-download-line text-[.8rem] text-[#FCFCFC] "></i>
                    <h6 className='uppercase text-[#FCFCFC] text-[.6rem]'>Download Resume</h6>
                </motion.div>

            </div>
            

        </div>

        <div className='w-[50vw] h-[100%]  pt-48 flex justify-end '>
            <img className='h-[100vh] w-[95%] object-cover ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" alt="" />               
        </div>
        
    </div>
  )
}

export default Homepage

