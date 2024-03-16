import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncAllFrontend } from '../../Store/Actions/FrontendActions.jsx'
import Create from './Create.jsx'
// import Create from './Create.jsx'


const AllFrontend = () => {
      const dispatch = useDispatch()
      const [hoveredIndex, setHoveredIndex] = useState(null);
      const [uploadcontent, setuploadcontent] = useState(false)
      useEffect(()=>{
        dispatch(asyncAllFrontend())
      },[])
      
      const handleHover = (index) => {
        setHoveredIndex(index);
        console.log("Hovered index:", index);
      };

      const ClickHandler = ()=>{
        setuploadcontent(prev => !prev)
      }

      const { allfrontend } = useSelector((state) => state.Frontend);
      const { isAuthenticated } = useSelector((state) => state.Admin);
      

      return (
        <div className='animate__animated  max-xs:gap-4 max-phone:px-4 max-phone:pb-0 animate__fadeIn animate__slow w-full flex flex-col justify-center max-xs:py-10 max-xs:px-8 max-xs:grid  max-md:grid-cols-1  max-xs:grid-cols-2'>
            {uploadcontent === true && <Create projecttype={"frontend"}/>}
            {/* <Create/> */}
            {allfrontend?.length > 0 ?
            allfrontend.map((frontend,index)=>(
              <Link 
              key={index} 
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                to={`/work/frontend/singlefrontend/${frontend._id}`}    
                className=' no-scrollbar hoverdiv max-xs:flex-col h-[25vh]  max-xs:h-fit  white  shrink-0 w-full border-b border-[#D8DADE] max-xs:items-start max-xs:pb-6  max-xs:border-none max-xs:px-0 pl-10 pr-12 flex items-center justify-between'>
                <div className='h-full flex flex-col justify-evenly  max-xs:gap-2 max-xs:py-4  py-6 max-xs:w-full  max-md:py-0 '>
                  <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
                    <p className='uppercase font-medium tracking-normal text-xs'>{frontend.aboutProject}</p>
                  </div>
                  <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{frontend.projectTitle}</h1>
                </div>
                <h1 className='capitalize text-xm text-[#BFC6C4] max-xs:py-4'>{frontend.projectType}</h1>
                <img className='max-xs:flex max-phone:h-[40vh] hidden z-[999999] max-md:h-[75vh] h-[65vh] w-full object-cover object-center' 
                  src={frontend.projectPoster.url} 
                  alt="" />
            </Link>

            ))
            :  
              "no"
            }  
            
            {
              isAuthenticated ? 
            
              <div className='flex justify-center py-6'>
                <img onClick={ClickHandler} className='w-[10vh] rotate-45 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
              </div>
              
              :
              
              ""
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

