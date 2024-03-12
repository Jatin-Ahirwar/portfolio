import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAllBackend } from '../../Store/Actions/BackendActions'
import { Link } from 'react-router-dom'
const AllBackend = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncAllBackend())
  },[])
  const { allbackend } = useSelector((state)=>state.Backend)
  return (
    <div className='animate__animated animate__fadeIn animate__slow w-full flex flex-col justify-center py-8'>      
      {allbackend? 
      allbackend?.map((backend,index)=>(
        <Link key={index} to={`/work/backend/singlebackend/${backend._id}`}   className='h-[25vh] shrink-0 w-full border-b border-[#D8DADE] pl-10 pr-12 flex items-center justify-between'>
            <div className='h-full flex flex-col justify-evenly py-6 ] '>
              <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
                <p className='uppercase font-medium tracking-normal text-xs'>{backend.aboutProject}</p>
              </div>
              <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{backend.projectTitle}</h1>
            </div>
            <h1 className='capitalize text-xm text-[#BFC6C4]'>{backend.projectType}</h1>
        </Link>
      ))
      : "Loading..."}
    </div>
  )
}

export default AllBackend


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncAllBackend } from '../../Store/Actions/BackendActions';
// import { Link } from 'react-router-dom';

// const AllBackend = () => {
//   const dispatch = useDispatch();
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     dispatch(asyncAllBackend());
//   }, []);

//   const { allbackend } = useSelector((state) => state.Backend);

//   const handleLinkHover = (index, event) => {
//     setHoveredIndex(index);
//     updateImagePosition(event);
//   };

//   const updateImagePosition = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     setImagePosition({ x, y });
//   };

//   const handleLinkLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div className='animate__animated animate__fadeIn animate__slow w-full flex flex-col justify-center py-8'>
//       {allbackend ? (
//         allbackend.map((backend, index) => (
//           <Link
//             key={index}
//             to={`/work/backend/singlebackend/${backend._id}`}
//             className='h-[25vh] shrink-0 w-full border-b border-[#D8DADE] pl-10 pr-12 flex items-center justify-between'
//             onMouseEnter={(event) => handleLinkHover(index, event)}
//             onMouseMove={(event) => hoveredIndex === index && updateImagePosition(event)}
//             onMouseLeave={handleLinkLeave}
//             style={{ position: 'relative' }}
//           >
//             <div className='h-full flex flex-col justify-evenly py-6'>
//               <div className='p-1 px-3 w-fit bg-[#D8DADE] flex items-center'>
//                 <p className='uppercase font-medium tracking-normal text-xs'>{backend.aboutProject}</p>
//               </div>
//               <h1 className='no-scrollbar capitalize tracking-normal font-bold text-5xl py-2'>{backend.projectTitle}</h1>
//             </div>
//             <h1 className='capitalize text-xm text-[#BFC6C4]'>{backend.projectType}</h1>
//             {hoveredIndex === index && (
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1675616575251-e61b1d69db79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with the actual image source
//                 alt='Hovered Image'
//                 style={{
//                   position: 'absolute',
//                   top: `${imagePosition.y}px`,
//                   left: `${imagePosition.x}px`,
//                   width: '10vh',
//                   height: '10vh',
//                   zIndex: 999,
//                 }}
//               />
//             )}
//           </Link>
//         ))
//       ) : (
//         'Loading...'
//       )}
//     </div>
//   );
// };

// export default AllBackend;
