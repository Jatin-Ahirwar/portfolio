import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncAllMern } from '../../Store/Actions/MernActions'

const AllMern = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(asyncAllMern())
  },[])
  const { AllMern } = useSelector((state)=>state.Mern)
  
  return (
    <div className='animate__animated animate__fadeIn animate__slow w-full flex flex-col justify-center py-8'>
    {AllMern? 
    AllMern?.map((Mern,index)=>(
      <Link key={index} to={`/work/mern/singlemern/${Mern._id}`}   className='h-[25vh] shrink-0 w-full border-b border-[#D8DADE] pl-10 pr-12 flex items-center justify-between'>
          <div className='h-full flex flex-col justify-evenly py-6 ] '>
            <div className='p-1 px-3 w-fit  bg-[#D8DADE] flex items-center'>
              <p className='uppercase font-medium tracking-normal text-xs'>{Mern.aboutProject}</p>
            </div>
            <h1 className='no-scrollbar capitalize  tracking-normal font-bold text-5xl py-2'>{Mern.projectTitle}</h1>
          </div>
          <h1 className='capitalize text-xm text-[#BFC6C4]'>{Mern.projectType}</h1>
      </Link>
    ))
    : "Loading..."}
    </div>
  )
}

export default AllMern

