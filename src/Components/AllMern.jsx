import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncAllMern } from '../../Store/Actions/MernActions.jsx'
import Create from './Create.jsx'
import Skeleton from 'react-loading-skeleton'


const AllMern = () => {
      const dispatch = useDispatch()
      const [hoveredIndex, setHoveredIndex] = useState(null);
      const [loading, setloading] = useState(true)


      useEffect(()=>{
        dispatch(asyncAllMern())
        .then(() => {
          setloading(false)
        })
        .catch((error) => {
          console.error('Error while dispatching asyncAllFrontend:', error);
        });


      },[])
      
      const handleHover = (index) => {
        setHoveredIndex(index);
        console.log("Hovered index:", index);
      };
      const [uploadcontent, setuploadcontent] = useState(false)

      const ClickHandler = ()=>{
        setuploadcontent(prev => !prev)
      }


      const { isAuthenticated } = useSelector((state) => state.Admin);



      const { AllMern } = useSelector((state) => state.Mern);
      

      return (
        <div className='animate__animated  max-xs:gap-4  max-phone:px-4 max-phone:pb-0 animate__fadeIn animate__slow w-full flex flex-col justify-center max-xs:py-10 max-xs:px-8 max-xs:grid  max-md:grid-cols-1  max-xs:grid-cols-2'>
            {uploadcontent === true && <Create projecttype={"mern"}/>}
            {loading  && 
              <Skeleton height={170} count={1} />            
            }

            {AllMern?.length > 0 ?
            AllMern.map((Mern,index)=>(
              <Link 
                key={index} 
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                to={`/work/Mern/singleMern/${Mern._id}`}    
                className='hover:px-[20px] max-phone:hover:px-0 hover:opacity-50 transition-all ease  duration-700 no-scrollbar hoverdiv  max-xs:flex-col h-[25vh]  max-xs:h-fit  white  shrink-0 w-full border-b border-[#D8DADE] max-xs:items-start max-xs:pb-6  max-xs:border-none max-xs:px-0 pl-10 pr-12 flex items-center justify-between'>
                <div className='h-full flex flex-col justify-evenly  max-xs:gap-2 max-xs:py-4  py-6 max-xs:w-full  max-md:py-0 '>
                  <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
                    <p className='uppercase font-medium tracking-normal text-xs'>{Mern.projectTitle}</p>
                  </div>
                  <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{Mern.projectName}</h1>
                </div>
                <h1 className='capitalize text-xm text-[#BFC6C4] max-xs:py-4'>{Mern.projectType}</h1>
                <img className='max-xs:flex hidden max-phone:h-[40vh] z-[999999] max-md:h-[75vh] h-[65vh] w-full object-cover object-center' 
                  src={Mern.projectPoster.url} 
                  alt="" />
            </Link>

            ))
            :  
              null
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

export default AllMern
