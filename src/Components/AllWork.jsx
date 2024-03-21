import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AllWork = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    sessionStorage.setItem('activeLink', linkId);
  };

  useEffect(() => {
    const currentLink = location.pathname.split('/')[2] || 'all';
    setActiveLink(currentLink);
    sessionStorage.setItem('activeLink', currentLink);
  }, [location]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('activeLink');
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const links = [
    { id: 'all', label: 'All', to: '/work' },
    { id: 'frontend', label: 'Front-End', to: '/work/frontend' },
    { id: 'backend', label: 'Back-End', to: '/work/backend' },
    { id: 'mern', label: 'Mern', to: '/work/mern' },
    { id: 'uiux', label: 'Ui/Ux', to: '/work/uiux' },
  ];

  return (
    <div className='w-full overflow-x-hidden flex flex-col px-8 gap-16 max-phone:gap-8 max-phone:px-4 '>
      <div className=' w-full mt-16  max-sm:pt-20 flex flex-col justify-between  max-phone:pt-10 '>
        <h1 className='animate__animated animate__slideInDown no-scrollbar capitalize  pb-4 tracking-normal font-bold max-md:text-[5.2rem] max-phone:py-2  max-xl:text-8xl max-phone:text-5xl text-9xl'>Crafting</h1>
        <h1 className='animate__animated animate__slideInDown no-scrollbar capitalize  max-md:text-[5rem] max-xss:leading-tight max-phone:text-5xl max-phone:leading-tight tracking-wide italic font-thin max-xl:leading-tighter  max-xss:text-[6rem] max-xl:text-[6.5rem] text-[7.3rem] '>Exceptional Products</h1>
      </div>

      <div className='navvi  max-phone:px-4 max-phone:pr-0  max-phone:grid max-phone:grid-cols-3 max-phone:py-4 max-phone:rounded-2xl max-phone:h-fit  h-[15vh] rounded-full w-full max-md:h-[12vh] max-md:px-6 bg-[#F3F3F3] flex items-center px-8 max-md:gap-4 gap-8'>
        {links.map(({ id, label, to }) => (
          <Link
            key={id}
            className={`h-[9vh] w-[10vw] max-xl:w-[12vw] max-lg:w-[14vw] max-md:w-[15vw] max-phone:h-[4vh] max-phone:text-[.5rem] max-md:h-[7vh] max-md:text-sm max-sm:w-[20vw] max-sm:text-xs rounded-full flex items-center justify-center uppercase tracking-wide font-bold ${
              activeLink === id ? 'bg-[#1F2024] text-[#FCFCFC]' : 'bg-[#FCFCFC]'
            } text-xm`}
            to={to}
            onClick={() => handleLinkClick(id)}
            style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllWork;
