

import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const rightNavRef = useRef(null);

  const openNavHandler = () => {
    menuRef.current.style.display = "none";
    closeRef.current.style.display = "flex";

    rightNavRef.current.style.display = "flex";
    // Add animation class for opening
    rightNavRef.current.classList.add("animate__fadeInDown");
    // Delay the removal of animation class
    setTimeout(() => {
        rightNavRef.current.classList.remove("animate__fadeInDown");
    }, 1000); // Adjust the delay time based on your animation duration
  }

  const closeNavHandler = () => {
      menuRef.current.style.display = "flex";
      closeRef.current.style.display = "none";

      // Add animation class for closing
      rightNavRef.current.classList.add("animate__fadeOutUp");
      // Delay the removal of animation class
      setTimeout(() => {
          rightNavRef.current.classList.remove("animate__fadeOutUp");
          rightNavRef.current.style.display = "none"; // Hide the navigation after animation
      }, 1000); // Adjust the delay time based on your animation duration
  }  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        menuRef.current.style.display = "none";
        closeRef.current.style.display = "none";
        rightNavRef.current.style.display = "flex";
        rightNavRef.current.classList.remove("animate__fadeOutUp");
      } else {
        rightNavRef.current.style.display = "none";
        if (closeRef.current.style.display === "flex") {
          menuRef.current.style.display = "none";
        } else {
          menuRef.current.style.display = "flex";
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (    
    <div className="max-sm:fixed z-50 w-[100%] h-[10vh] flex items-center justify-between px-10 bg-[#FCFCFC]">
      <Link className='flex flex-col items-end border border-zinc-500 px-3' to="/">
        {["JATIN", "AHIRWAR"].map((item, index) => (
          <p key={index} className='text-sm'>{item}</p>
        ))}
      </Link>
      <div className='animate__animated max-sm:hidden max-sm:h-[95vh] max-sm:flex-col max-sm:justify-start max-sm:pt-20 max-sm:items-center max-sm:z-[9] max-sm:fixed max-sm:w-full max-sm:top-16 max-sm:left-0 bg-[#FCFCFC] rightnav flex justify-between max-sm:gap-0 gap-10' ref={rightNavRef}>
        <Link className='max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/work">work</Link>
        <Link className='max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/about">about</Link>
        <Link className='max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/contact">contact</Link>
      </div>

      <div onClick={openNavHandler} ref={menuRef} className='transition-all openicon max-sm:flex uppercase bg-black text-[#FEFEFE] py-2 px-4 tracking-widest rounded-tr-2xl rounded-bl-2xl hidden'>
        menu
      </div>      

      <div onClick={closeNavHandler} ref={closeRef} className='transition-all closeicon uppercase bg-[#FEFEFE] text-black border-2 font-bold border-black py-2 px-4 tracking-widest rounded-tr-2xl rounded-bl-2xl hidden'>
        close
      </div>      
    </div>
  )
}

export default Nav;
