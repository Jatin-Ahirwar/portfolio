import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncAllFrontend } from '../../Store/Actions/FrontendActions.jsx'
import Create from './Create.jsx'
import Skeleton from 'react-loading-skeleton'


const AllFrontend = () => {
      const dispatch = useDispatch()
      const [hoveredIndex, setHoveredIndex] = useState(null);
      const [uploadcontent, setuploadcontent] = useState(false)
      const [loading, setloading] = useState(true)
      useEffect(()=>{
        dispatch(asyncAllFrontend())
        setloading(false)
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
            
            {loading  && 
              <Skeleton height={170} count={1} />            
            }
            {allfrontend?.length > 0 ?
            allfrontend.map((frontend,index)=>(
              <Link 
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                to={`/work/frontend/singlefrontend/${frontend._id}`}    
                className='hover:px-[20px] max-phone:hover:px-0 hover:opacity-50 transition-all ease duration-700 no-scrollbar hoverdiv max-xs:flex-col h-[25vh]  max-xs:h-fit  white  shrink-0 w-full border-b border-[#D8DADE] max-xs:items-start max-xs:pb-6  max-xs:border-none max-xs:px-0 pl-10 pr-12 flex items-center justify-between'>
                <div className='h-full flex flex-col justify-evenly  max-xs:gap-2 max-xs:py-4  py-6 max-xs:w-full  max-md:py-0 '>
                  <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
                    <p className='uppercase font-medium tracking-normal  text-xs'> 
                      {frontend?.projectTitle}
                    </p>
                  </div>
                  <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{frontend.projectName}</h1>
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


