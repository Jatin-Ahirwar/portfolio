import { AnimatePresence, motion , useSpring  } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                    end: "+=70%",
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
    <div className='w-full  overflow-x-hidden flex  px-8 pt-24 max-lg'>

        <div className=' w-[50vw] min-h-[200vh]  flex flex-col justify-between '>
            
            <div className='h-[45vh]'>
                <div className='no-scrollbar absolute flex flex-col justify-center '>
                    <h1 className='text-9xl font-black py-3 overflow-hidden'>
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

                    <h1 className='text-[6rem]  italic capitalize' >
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
            
            <div className='h-[18vh] flex flex-col justify-between pr-10'>
                <h1>TECHNOLOGIES I WORK WITH</h1>
                <div className='h-[12vh] overflow-x-auto no-scrollbar flex whitespace-nowrap'>
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

            <div onClick={scrollToBottom} className='overflow-y-auto h-[10vh] w-[10vh] bg-[#ECECED] flex flex-col justify-center  items-center  rounded-full'>
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

        <div 
            ref={pinnedElementRef}        
            className='page22 w-[50vw] h-[100%]  no-scrollbar  pt-48 flex justify-end '>
                <motion.img 
                    initial={{y:"500px"}}
                    animate={{y:"0"}}
                    transition={{
                        ease: [0.33, 1, 0.68, 1],
                        duration:1.5,
                        delay:.5
                    }}
                    className='h-[100vh] w-[95%] object-cover object-center ' 
                    src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" 
                    alt="" />               
        </div>

    </div>
  )
}

export default Homepage


// import { AnimatePresence, motion , useSpring  } from 'framer-motion'
// import React, { useEffect, useRef, useState } from 'react'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Homepage = () => {    
//     gsap.registerPlugin(ScrollTrigger);
//     const springProps = {
//         type: 'spring',
//         stiffness: 1000,
//         damping: 300,
//     };

//     const pinnedElementRef = useRef(null);

//     useEffect(() => {
//         if (pinnedElementRef.current) {
//             gsap.to(pinnedElementRef.current, {
//                 scrollTrigger: {
//                     trigger: pinnedElementRef.current,
//                     pin: true,
//                     start: "top -10%",
//                     end: "+=70%",
//                     scrub: true,
//                 },
//             });
//         }
//     }, []);

//     const logos = [
//         "https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png",
//         "https://ik.imagekit.io/jatinahirwar/css-logo-black-and-white-removebg-preview.png?updatedAt=1709710538534",
//         "https://ik.imagekit.io/jatinahirwar/kisspng-javascript-computer-icons-programming-language-nod-java-script-5b33c9afe3f1d2.1067225515301206239337-removebg-preview.png?updatedAt=1709711668854",
//         "https://www.shareicon.net/data/2016/06/19/603784_nodejs_512x512.png",
//         "https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png",
//         "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
//         "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
//         "https://static-00.iconduck.com/assets.00/tailwind-icon-512x309-a8f1tun1.png",
//         "https://ik.imagekit.io/jatinahirwar/png-transparent-figma-brands-icon-removebg-preview.png?updatedAt=1709711315351",
//         "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",
//         "https://ik.imagekit.io/jatinahirwar/png-transparent-redux-react-javascript-state-management-github-github-thumbnail-removebg-preview.png?updatedAt=1709711315334",
//         "https://itsolution24x7.com/blog/wp-content/uploads/2020/06/socketio.png",
//         "https://ik.imagekit.io/jatinahirwar/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail-removebg-preview.png?updatedAt=1709711315174",
//         "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/VITE-VITE-900x0.png",
//         "https://static-00.iconduck.com/assets.00/postman-icon-256x256-928z3ljk.png",
//         "https://ik.imagekit.io/jatinahirwar/png-clipart-microsoft-visual-studio-express-computer-icons-microsoft-visual-c-visual-studio-code-studio-angle-studio-removebg-preview.png?updatedAt=1709711315212",
//     ];

//     const text = "Full Stack Developer";
//     const text2 = "& Ui/Ux Designer";

//     const scrollToBottom = () => {
//         window.scrollTo({ top: window.pageYOffset + window.innerHeight * 1.5, behavior: 'smooth' });
//     };        

//     return (
//     <div className='w-full overflow-hidden flex flex-col lg:flex-row px-8 pt-24 max-lg'>

//         <div className='w-full lg:w-[50vw] min-h-screen flex flex-col justify-between lg:justify-start'>

//             <div className='h-[45vh] relative flex flex-col justify-center'>
//                 <h1 className='text-6xl lg:text-9xl font-black py-3 overflow-hidden'>
//                     {text.split(" ").map((word, wordIndex) => (
//                         <span key={wordIndex}>
//                             {word.split("").map((char, charIndex) => (
//                                 <motion.span
//                                     className='overflow-hidden'
//                                     style={{ display: 'inline-block' }}
//                                     key={charIndex}
//                                     initial={{ x: -20, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     transition={{
//                                         ease: [0.83, 0, 0.17, 1],
//                                         delay: wordIndex * 0.2 + charIndex * 0.05 // Adjust delay as needed
//                                     }}
//                                 >
//                                     {char}
//                                 </motion.span>
//                             ))}
//                             {" "}
//                         </span>
//                     ))}                    
//                 </h1>

//                 <h1 className='text-[3rem] lg:text-[6rem] italic capitalize'>
//                     {text2.split(" ").map((word, wordIndex) => (
//                         <motion.span
//                             key={wordIndex}
//                             initial={{ opacity: 0, x: -20 }} // Initial position adjusted for italic
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ ease: [0.83, 0, 0.17, 1], delay: .8 + wordIndex * .2, duration: .5 }} // Adjust delay and duration as needed
//                             style={{ display: 'inline-block' }}
//                         >
//                             {word}
//                             &nbsp; {/* Add a non-breaking space after each word */}
//                         </motion.span>
//                     ))}
//                 </h1>
//             </div>

//             <div className='lg:w-full flex justify-between lg:pr-32'>
//                 <div>
//                     <h1 className='text-xl tracking-widest font-black'>LOCATED</h1>
//                     <h1 className='text-xl tracking-widest font-black'>IN INDIA <span className='text-sm'>(ASIA)</span></h1>
//                 </div>

//                 <div>
//                     <h1 className='text-xl tracking-widest font-black'>CURRENTLY AVAILABLE FOR</h1>
//                     <h1 className='text-xl tracking-widest font-black'>WORK IN WORLDWIDE 🌎</h1>
//                 </div>
//             </div>

//             <div className='h-[18vh] flex flex-col justify-between pr-10'>
//                 <h1>TECHNOLOGIES I WORK WITH</h1>
//                 <div className='h-[12vh] overflow-x-auto no-scrollbar flex whitespace-nowrap'>
//                     {logos.map((logo, index) => (
//                         <motion.div
//                             initial={{x:"0%"}}
//                             animate={{x:"-2000%"}} 
//                             transition={{repeat:Infinity , ease:"linear" , duration:10 }}
//                             key={index} 
//                             className="mr-6  shrink-0 h-full w-24  flex items-center justify-center border border-solid"
//                         >
//                             <img className='object-cover h-3/6' src={logo} alt="" />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             <div onClick={scrollToBottom} className='overflow-y-auto h-[10vh] lg:h-[20vh] w-[10vh] lg:w-[20vh] bg-[#ECECED] flex flex-col justify-center items-center rounded-full'>
//                 <div className='no-scrollbar h-1/2 w-1/2 flex flex-col justify-center items-center '>
//                     {[...Array(16)].map((_, i) => (
//                         <motion.i key={i} initial={{y:"0%" , opacity:.5}} animate={{y:"500%" , opacity:1}} transition={{repeat:Infinity , ease:"linear" , duration:3 }} class="ri-arrow-down-wide-fill h-2 text-2xl font-thin flex items-center  no-scrollbar py-1.5 "></motion.i>
//                     ))}
//                 </div>        
//             </div>

//             <div className='w-full lg:w-auto pr-12 flex justify-between pt-8 pb-24  '>
//                 <p className='no-scrollbar font-normal text-lg w-full lg:w-3/5 tracking-normal'>
//                     My expertise lies in creating compelling user experiences for early-stage startups, achieved by establishing a strong link between the unique requirements of the users and the business goals of the client.
//                 </p>
//                 <motion.div 
//                     drag
//                     dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//                     {...springProps}                
//                     className='no-scrollbar overflow-y-hidden h-[20vh] w-[20vh] lg:w-auto rounded-full bg-[#1F2024] justify-center flex gap-1 items-center '
//                 >    
//                     <i class="ri-download-line text-[.8rem] text-[#FCFCFC] "></i>
//                     <h6 className='uppercase text-[#FCFCFC] text-[.6rem]'>Download Resume</h6>
//                 </motion.div>

//             </div>
            
//         </div>

//         <div 
//             ref={pinnedElementRef}        
//             className='page22 w-full lg:w-[50vw] h-[100%] lg:h-auto  no-scrollbar  pt-48 lg:pt-0 flex justify-end '>
//                 <motion.img 
//                     initial={{y:"500px"}}
//                     animate={{y:"0"}}
//                     transition={{
//                         ease: [0.33, 1, 0.68, 1],
//                         duration:1.5,
//                         delay:.5
//                     }}
//                     className='h-[100vh] lg:h-auto w-full lg:w-[95%] object-cover object-center ' 
//                     src="https://assets-global.website-files.com/63b48659e1b2e861f4a64c86/641412429d689f55000edf0c_IMG_7076-p-1080.webp" 
//                     alt="" />               
//         </div>

//     </div>
//   )
// }

// export default Homepage;
