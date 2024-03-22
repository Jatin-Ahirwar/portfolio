

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
    <div className="max-sm:fixed z-50 w-[100%]  h-[10vh] flex items-center justify-between max-phone:px-2 px-10 bg-[#FCFCFC]">
      <Link onClick={() => {if (window.innerWidth < 640) {closeNavHandler(); }}} className='flex flex-col   items-end border border-[#0000005f] px-3  ' to="/">
        <img className='h-[5.5vh]  object-cover py-1' src="https://ik.imagekit.io/jatinahirwar/ja%20new.png?updatedAt=1710922364500" alt="" />
      </Link>

      <div className='animate__animated max-sm:hidden   max-phone:pt-32 max-phone:top-16 max-sm:h-[100vh] max-sm:flex-col max-sm:justify-start max-sm:pt-20 max-sm:items-center max-sm:z-[9] max-sm:fixed max-sm:w-full max-sm:top-16 max-sm:left-0 bg-[#FCFCFC] rightnav flex justify-between max-sm:gap-0 gap-10' ref={rightNavRef}>
        <Link onClick={() => {if (window.innerWidth < 640) {closeNavHandler(); }}} className='max-phone:text-5xl max-phone:py-7  max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/work">work</Link>
        <Link onClick={() => {if (window.innerWidth < 640) {closeNavHandler(); }}} className='max-phone:text-5xl max-phone:py-7  max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/about">about</Link>
        <Link onClick={() => {if (window.innerWidth < 640) {closeNavHandler(); }}} className='max-phone:text-5xl max-phone:py-7  max-sm:text-7xl max-sm:font-bold max-sm:capitalize max-sm:py-10 max-sm:w-full flex max-sm:justify-center border-b border-black uppercase' to="/contact">contact</Link>
      </div>

      <div onClick={openNavHandler} ref={menuRef} className='transition-all max-phone:py-2  max-phone:text-[.8rem] openicon max-sm:flex uppercase bg-black text-[#FEFEFE] py-2 px-4 tracking-widest rounded-tr-2xl rounded-bl-2xl hidden'>
        menu
      </div>      

      <div onClick={closeNavHandler} ref={closeRef} className='transition-all max-phone:py-2  max-phone:px-3 max-phone:text-[.8rem] closeicon uppercase bg-[#FEFEFE] text-[#000000d3] border-2 font-bold border-[#00000071] py-2 px-4 tracking-widest rounded-tr-2xl rounded-bl-2xl hidden'>
        close
      </div>      
    </div>
  )
}

export default Nav;
