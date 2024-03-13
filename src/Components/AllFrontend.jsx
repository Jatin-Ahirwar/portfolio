import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncAllFrontend } from '../../Store/Actions/FrontendActions.jsx'


const AllFrontend = () => {
      const dispatch = useDispatch()
      const [hoveredIndex, setHoveredIndex] = useState(null);

      useEffect(()=>{
        dispatch(asyncAllFrontend())
      },[])
      
      const handleHover = (index) => {
        setHoveredIndex(index);
        console.log("Hovered index:", index);
      };


      const { allfrontend } = useSelector((state) => state.Frontend);
      

      return (
        <div className='animate__animated animate__fadeIn animate__slow w-full flex flex-col justify-center '>
            {allfrontend?.length > 0 ?
            allfrontend.map((frontend,index)=>(
              <Link 
              key={index} 
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                to={`/work/frontend/singlefrontend/${frontend._id}`}    
                className='no-scrollbar hoverdiv h-[25vh] shrink-0 w-full border-b border-[#D8DADE] pl-10 pr-12 flex items-center justify-between'>
                <div className='h-full flex flex-col justify-evenly py-6 ] '>
                  <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
                    <p className='uppercase font-medium tracking-normal text-xs'>{frontend.aboutProject}</p>
                  </div>
                  <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{frontend.projectTitle}</h1>
                </div>
                <h1 className='capitalize text-xm text-[#BFC6C4]'>{frontend.projectType}</h1>
                {/* <img className='absolute z-[999999] h-[50vh] w-[60vh] object-cover object-center' 
                  src={frontend.projectPoster.url} 
                  alt="" /> */}
            </Link>

            ))
            :  
              "no"
            }   
        </div>  
    )
}

export default AllFrontend

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { asyncAllFrontend } from '../../Store/Actions/FrontendActions.jsx';

// const AllFrontend = () => {
//     const dispatch = useDispatch();
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         dispatch(asyncAllFrontend());
//     }, []);

//     const handleHover = (index) => {
//         setHoveredIndex(index);
//     };

//     const handleLeave = () => {
//         setHoveredIndex(null);
//     };

//     const handleMouseMove = (e) => {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const { allfrontend } = useSelector((state) => state.Frontend);

//     return (
//         <div 
//             className='animate__animated animate__fadeIn animate__slow w-full flex flex-col justify-center py-8'
//             onMouseMove={handleMouseMove}
//         >
//             {allfrontend?.length > 0 ?
//                 allfrontend.map((frontend, index) => (
//                     <Link
//                         key={index}
//                         onMouseEnter={() => handleHover(index)}
//                         onMouseLeave={() => handleLeave()}
//                         to={`/work/frontend/singlefrontend/${frontend._id}`}
//                         className='no-scrollbar hoverdiv  h-[25vh] shrink-0 w-full border-b border-[#D8DADE] pl-10 pr-12 flex items-center justify-between'
//                     >
//                         <div className='h-full flex flex-col justify-evenly py-6'>
//                             <div className='p-1 px-3 w-fit bg-[#D8DADE] flex items-center'>
//                                 <p className='uppercase font-medium tracking-normal text-xs'>{frontend.aboutProject}</p>
//                             </div>
//                             <h1 className='no-scrollbar capitalize tracking-normal font-bold text-5xl py-2'>{frontend.projectTitle}</h1>
//                         </div>
//                         <h1 className='capitalize text-xm text-[#BFC6C4]'>{frontend.projectType}</h1>
//                         {hoveredIndex === index && (
//                             <img
//                                 className='absolute h-[40vh] w-[40vh] object-cover object-center'
//                                 src={frontend.projectPoster.url}
//                                 alt=""
//                                 style={{ 
//                                   left: `${Math.min(mousePosition.x - 15, window.innerWidth - 30)}px`,
//                                   top: `${Math.min(mousePosition.y - 15, window.innerHeight - 30)}px`,
//                                   transform: 'translate(-50%, -50%)',
//                               }}
//                             />
//                         )}
//                     </Link>
//                 ))
//                 :  
//                 "no"
//             }            
//         </div>  
//     );
// };

// export default AllFrontend;

