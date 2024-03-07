import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllWork = () => {
  const [activeLink, setActiveLink] = useState('all'); // 'all' is the default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='w-full overflow-x-hidden flex flex-col px-8 gap-16'>
      <div className='h-[45vh]  w-full mt-16  flex flex-col justify-between'>
        <h1 className='no-scrollbar capitalize  h-[20vh] tracking-normal font-bold text-9xl'>Crafting</h1>
        <h1 className='no-scrollbar capitalize  tracking-wide italic font-thin text-[7.4rem] '>Exceptional Products</h1>
      </div>

      <div className='navvi h-[18vh] rounded-full w-full bg-[#F3F3F3] flex items-center px-10 gap-8'>
        <Link
          className={`h-[9vh] w-[10vw] rounded-full flex items-center justify-center  uppercase tracking-wide font-bold ${
            activeLink === 'all' ? 'bg-[#1F2024] text-[#FCFCFC]'  : 'bg-[#FCFCFC] '
          } text-xm`}
          to='/work'
          onClick={() => handleLinkClick('all')}
          style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
        >
          All
        </Link>
        <Link
          className={`h-[9vh] w-[10vw] rounded-full flex items-center justify-center ${
            activeLink === 'frontend' ? 'text-[#F3F3F3] bg-[#1F2024] ' : 'bg-[#FCFCFC]'
          }   uppercase tracking-wide font-bold text-xm`}
          to='/work/frontend'
          onClick={() => handleLinkClick('frontend')}
          style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
        >
          Front-End
        </Link>
        <Link
          className={`h-[9vh] w-[10vw] rounded-full flex items-center justify-center ${
            activeLink === 'mern' ? 'text-[#F3F3F3] bg-[#1F2024]' : 'bg-[#FCFCFC]'
          }   uppercase tracking-wide font-bold text-xm`}
          to='/work/mern'
          onClick={() => handleLinkClick('mern')}
          style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}
        >
          Mern
        </Link>
        <Link
          className={`h-[9vh] w-[10vw] rounded-full flex items-center justify-center ${
            activeLink === 'uiux' ? 'text-[#F3F3F3] bg-[#1F2024]' : 'bg-[#FCFCFC]'
          }   uppercase tracking-wide font-bold text-xm`}
          to='/work/uiux'
          onClick={() => handleLinkClick('uiux')}
          style={{ transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' }}

        >
          Ui/Ux
        </Link>
      </div>
    </div>
  );
};

export default AllWork;
