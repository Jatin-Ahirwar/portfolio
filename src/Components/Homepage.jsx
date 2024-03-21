import { AnimatePresence, motion , useSpring  , useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideUp, opacity } from "./animation";


const Homepage = () => {    
    gsap.registerPlugin(ScrollTrigger);
    const springProps = {
        type: 'spring',
        stiffness: 1000,
        damping: 300,
    };

    const pinnedElementRef = useRef(null);

    useEffect(() => {
        if (pinnedElementRef.current) {
            gsap.to(pinnedElementRef.current, {
                scrollTrigger: {
                    trigger: pinnedElementRef.current,
                    pin: true,
                    start: "top -10%",
                    end: "+=50%",
                    // markers:true,
                    scrub: true,
                },
            });
        }
    }, []);

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

    const text = "Full Stack Developer"
    const text2 = "& Ui/Ux Designer"

    const scrollToBottom = () => {
        window.scrollTo({ top: window.pageYOffset + window.innerHeight * 1.5, behavior: 'smooth' });
    };        


    return (
    <div className='w-full max-xs:block min-h-[200vh] max-phone:min-h-[190vh]  overflow-x-hidden flex max-sm:pt-28 max-xs:pt-10 px-8 max-phone:px-4 pt-24 '>

        <div className='max-xs:w-full w-[50vw]  flex flex-col justify-between '>
            
            <div className='max-xs:h-[35vh] max-phone:h-[17vh] max-xss:h-[32vh] max-md:h-[25vh] h-[45vh]'>
                <div className='no-scrollbar absolute flex flex-col  justify-center '>
                    
                    <h1 className=' max-xl:text-[6.8rem] max-phone:text-[2rem] max-xs:text-[5.6rem] max-md:text-[4rem] max-sm:text-[3.5rem]  max-xss:text-[4.8rem] text-9xl font-black   overflow-hidden'>
                        {text.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex}>
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        className='overflow-hidden'
                                        style={{ display: 'inline-block' }}
                                        key={charIndex}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            ease: [0.83, 0, 0.17, 1],
                                            delay: wordIndex * 0.2 + charIndex * 0.05 // Adjust delay as needed
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                            ))}
                            {" "}
                        </span>
                    ))}                    
                    </h1>
                                        
                    <h1 className='z-[30] max-xs:text-[4.5rem] max-phone:text-[1.7rem] max-xss:text-[4rem] max-md:text-[3rem] text-[6rem] italic capitalize' >
                    {text2.split(" ").map((word, wordIndex) => (
                        <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0, x: -20 }} // Initial position adjusted for italic
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ease: [0.83, 0, 0.17, 1], delay: .8 + wordIndex * .2, duration: .5 }} // Adjust delay and duration as needed
                            style={{ display: 'inline-block' }}
                        >
                            {word}
                            &nbsp; {/* Add a non-breaking space after each word */}
                        </motion.span>
                    ))}
                    </h1>
                </div>
            </div>
                
            <img className='h-[80vh] max-phone:h-[50vh] max-xs:flex hidden w-[100vw] object-cover object-center  ' src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp"  alt="" />

            <div className=' w-full max-md:gap-0 max-md:justify-between max-xs:py-28 max-sm:py-20 flex gap-40  '>
                    <div>
                        <h1 className='text-xl max-phone:text-[.7rem] tracking-widest font-black'>LOCATED</h1>
                        <h1 className='text-xl max-phone:text-[.7rem] tracking-widest font-black'>IN INDIA <span className='text-sm max-phone:text-[.7rem]'>(ASIA)</span></h1>
                    </div>

                    <div>
                        <h1 className='text-xl max-phone:text-[.7rem] tracking-widest font-black'>CURRENTLY AVAILABLE FOR</h1>
                        <h1 className='text-xl max-phone:text-[.7rem] tracking-widest font-black'>WORK IN WORLDWIDE 🌎</h1>
                    </div>
            </div>
            
            <div className='h-[18vh] max-phone:h-[15vh] flex flex-col  justify-between pr-10'>
                <h1>TECHNOLOGIES I WORK WITH</h1>
                <div className='h-[12vh] max-phone:h-[9vh]  max-phone:w-screen overflow-x-hidden no-scrollbar flex whitespace-nowrap'>
                    {logos.map((logo, index) => (
                        <motion.div
                            initial={{x:"0%"}}
                            animate={{x:"-2000%"}} 
                            transition={{repeat:Infinity , ease:"linear" , duration:10 }}
                            key={index} 
                            className="mr-6 shrink-0 h-full w-24  flex items-center justify-center border border-solid"
                        >
                            <img className='object-cover h-3/6' src={logo} alt="" />
                        </motion.div>
                    ))}

                    {logos.map((logo, index) => (
                        <motion.div
                            initial={{x:"0%"}}
                            animate={{x:"-2000%"}} 
                            transition={{repeat:Infinity , ease:"linear" , duration:10 }}
                            key={index} 
                            className="mr-6  shrink-0 h-full w-24  flex items-center justify-center border border-solid"
                        >
                            <img className='object-cover h-3/6' src={logo} alt="" />
                        </motion.div>
                    ))}

                    {logos.map((logo, index) => (
                        <motion.div
                            initial={{x:"0%"}}
                            animate={{x:"-2000%"}} 
                            transition={{repeat:Infinity , ease:"linear" , duration:10 }}
                            key={index} 
                            className="mr-6 shrink-0 h-full w-24  flex items-center justify-center border border-solid"
                        >
                            <img className='object-cover h-3/6' src={logo} alt="" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div onClick={scrollToBottom} className='overflow-y-auto max-xs:my-28 max-sm:my-20 max-phone:h-[8vh] max-phone:w-[8vh]  h-[10vh] w-[10vh] bg-[#ECECED] flex flex-col justify-center  items-center  rounded-full'>
                <div className='no-scrollbar h-1/2 w-1/2 flex flex-col justify-center items-center '>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                    <motion.i initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
                </div>        
            </div>

            <div className='w-[45vw] max-phone:px-0  max-phone:flex-col max-phone:items-center max-phone:gap-8 max-phone:pb-8 flex justify-between pt-8 pb-24 max-xs:pt-0 max-xs:w-full'>
                <p className='no-scrollbar font-normal max-xs:text-2xl max-phone:w-full max-phone:text-xl text-lg w-3/5 tracking-normal'>
                    My expertise lies in full-stack development and UI/UX designing, I specialize in crafting compelling user experiences by aligning user needs with business objectives. Through a blend of technical expertise and design finesse, I deliver solutions that resonate with target audiences and drive engagement.   
                </p>
                <motion.div 
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    {...springProps}                
                    className='max-phone:w-[60vw] max-phone:h-[5vh]  no-scrollbar overflow-y-hidden h-[20vh] w-[20vh] F2024] rounded-full bg-[#1F2024] justify-center flex gap-1 items-center '
                >    
                    <i class="ri-download-line text-[.8rem] text-[#FCFCFC] "></i>
                    <h6 className='uppercase text-[#FCFCFC] text-[.6rem]'>Download Resume</h6>
                </motion.div>

            </div>
            
        </div>

        <div 
            ref={pinnedElementRef}        
            className='page22  max-xs:hidden w-[48vw] h-full  no-scrollbar  pt-48 flex justify-end '>
                <motion.img 
                    initial={{y:"500px"}}
                    animate={{y:"0"}}
                    transition={{
                        ease: [0.33, 1, 0.68, 1],
                        duration:1.5,
                        delay:.5
                    }}
                    className='h-[100vh] w-full object-cover object-center ' 
                    src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" 
                    alt="" />               
        </div>

    </div>
  )
}

export default Homepage

