import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
import { motion } from 'framer-motion';



const About = () => {
    const skills = [
      "HTML",
      "css",
      "javascript",
      "Tailwind",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "express.js",
      "figma"
    ]
    const ref = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      skills.forEach((skill, skillIndex) => {
        const letters = skill.split('');
        gsap.from(ref.current.querySelectorAll(`.skill-${skillIndex} span`), {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
          color: '#D2D2D4', 
          stagger: 0.1,
          duration: 0.5,
        });
      });
    }, [skills]);

    return (
    <div className='animate__animated animate__fadeIn animate__slow w-full overflow-x-hidden flex flex-col max-xs:gap-10  gap-16'>
      <div className='  w-full mt-16 px-8 max-phone:px-4 flex flex-col justify-between max-sm:mt-0 max-sm:pt-20 '>
        <h1 className='animate__animated animate__slideInDown max-phone:text-3xl overflow-hidden animate-slowest no-scrollbar capitalize max-phone:text-[3rem] max-phone:leading-tight py-2 tracking-normal font-black max-xl:text-[4.5rem] max-lg:text-[3.8rem] text-[5.7rem]'> Crafting Innovative Solutions</h1>
        <h1 className='animate__animated animate__slideInDown max-phone:text-xl overflow-hidden animate-slowest no-scrollbar capitalize max-phone:text-[2.5rem] tracking-wide italic font-thin max-xl:text-[2.9rem]  text-[4.2rem] '>for Seamless Web Development</h1>
      </div>

      <div className='mt-8 max-sm:mt-0 flex flex-col gap-12 w-full no-scrollbar max-phone:px-4 px-8'>
        <img className='w-screen no-scrollbar' src="https://ik.imagekit.io/jatinahirwar/about%20(1).png?updatedAt=1710990972882" alt="" />

      <div  className='w-full  flex max-xss:justify-center justify-end '>
        <div className='w-[50%] pt-6  flex flex-col gap-4 max-xss:w-full  border-t border-black  ' >
            <p className='text-xl max-phone:text-[1.1rem]' >I'm Jatin, A Versatile Full Stack Developer and UI/UX Designer from Bhopal , india. My portfolio showcases innovative solutions, seamlessly fusing technology . in designing digital products, with a strong focus on user interface, animations & interactions.</p>
            <p className='text-xl max-phone:text-[1.1rem]' >I am Eager to learn new technologies and continuously pushing the boundaries of my skills to achieve the higher standards of Knowledge.</p>
        </div>      
      </div>

      </div>

      
      <div className='w-full  bg-[#F1F1F3] px-8 max-phone:py-8 max-phone:px-4 py-20 '>
        <h1 className='tracking-wide color-[#717174]'>WHAT DO I DO AND HOW?</h1>
        
        <div className='pb-32 w-full max-xss:my-12 max-xss:pb-10 my-24 max-phone:mb-10  flex max-xss:grid max-xss:grid-cols-2 max-phone:grid-cols-1 border-b border-zinc-400 max-phone:gap-10'>
              
              <div className='w-1/4 max-xss:w-full max-xss:h-[50vh] h-full flex flex-col max-phone:h-fit pr-4' >
                  <img className='w-1/5' src="https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png" alt="" />
                  <h1 className='text-4xl text-black py-4 '>Front-End</h1>
                  <p>"Emerging Front-End Developer skilled in React.js and Next.js. Committed to crafting compelling and user-friendly web interfaces with a passion for staying current on industry trends."</p>
              </div>

              <div className='w-1/4 max-xss:w-full max-xss:h-[50vh] h-full flex flex-col max-phone:h-fit pr-4' >
              <img className='w-1/6' src="https://www.shareicon.net/data/2016/06/19/603784_nodejs_512x512.png" alt="" />
                  <h1 className='text-4xl text-black py-4 '>Back-End</h1>
                  <p>"Backend Developer specializing in Node.js, Express.js, and MongoDB. Proficient in building robust, scalable server-side solutions and passionate about contributing to innovative projects."</p>
              </div>

              <div className='w-1/4 max-xss:w-full max-xss:h-[50vh] h-full flex flex-col max-phone:h-fit pr-4' >
              <img className='w-1/3' src="https://ik.imagekit.io/jatinahirwar/mern.png?updatedAt=1709840325824" alt="" />
                  <h1 className='text-4xl text-black py-4 '>Mern-stack</h1>
                  <p>"Versatile MERN Stack Developer skilled in React.js, Next.js, Node.js, Express.js, and MongoDB. Expertly integrates front-end and back-end technologies for dynamic web applications, passionate about delivering engaging digital experiences."</p>
              </div>

              <div className='w-1/4 max-xss:w-full max-xss:h-[50vh] h-full flex flex-col max-phone:h-fit pr-4' >
              <img className='w-1/6' src="https://ik.imagekit.io/jatinahirwar/png-transparent-figma-brands-icon-removebg-preview.png?updatedAt=1709711315351" alt="" />
                  <h1 className='text-4xl text-black py-4 '>Ui/Ux</h1>
                  <p>"Dynamic UI/UX Designer utilizing Figma to create engaging digital experiences with a focus on innovative design solutions and user-centric interfaces."</p>
              </div>

        </div>
      
      <div className='w-full flex max-xss:flex-col max-xss:gap-8 '>
        <h1 className='text-2xl max-xss:w-full max-phone:text-xl   font-medium w-2/4'>As a passionate Full Stack Developer, I have acquired comprehensive skills in building robust and scalable web applications. My proficiency includes:</h1>

          <div className='w-2/6 max-xss:w-full' ref={ref}>
            {skills.map((skill, skillIndex) => (
              <h1 key={skillIndex} className='text-7xl py-2 uppercase font-black  max-phone:text-5xl'>
                <span className={`skill-${skillIndex}`}>
                  {skill.split('').map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`letter-${skillIndex}-${letterIndex} text-black`}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>
            ))}
          </div>

      </div>

      </div>

    
    </div>
  );
};

export default About;
