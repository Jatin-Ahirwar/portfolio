import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAllFrontend } from '../../Store/Actions/FrontendActions.jsx'
import { asyncAllBackend } from '../../Store/Actions/BackendActions.jsx'
import { asyncAllMern } from '../../Store/Actions/MernActions.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { asyncAllUiux } from '../../Store/Actions/UiuxActions.jsx'
const Templetes = () => {
    const { allfrontend } = useSelector((state) => state.Frontend);
    const { allbackend } = useSelector((state) => state.Backend);
    const { AllMern } = useSelector((state) => state.Mern);
    const { alluiux } = useSelector((state)=>state.UiUx)
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const colors = [
        "#E1DAD6",
        "#21242B",
        "#D4E3EC",
    ];

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const height = useTransform(scrollYProgress, [0, 1], [50, 0]);


    const  dispatch = useDispatch()
    useEffect(()=>{
        dispatch(asyncAllFrontend())
        dispatch(asyncAllBackend())
        dispatch(asyncAllMern())
        dispatch(asyncAllUiux())
    },[])
    return (
    <div ref={container} className=' w-full max-xs:hidden relative overflow-x-hidden flex flex-col gap-8 pt-28 pb-36'>
        
        <motion.div style={{x:x1}}  className='overflow-x-hidden h-[43vh] w-[130vw] max-xl:h-[35vh] relative left-[-5vw] whitespace-nowrap flex gap-8  no-scrollbar'>
                {
                    allfrontend
                    ?.slice() // Creates a shallow copy of the array
                    .reverse() // Reverse the copy of the array
                    .map((frontend, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: colors[index % colors.length] }}
                        className="shrink-0 h-full w-[30vw] bg-[#D1D0D1] flex justify-center items-center"
                      >
                        <img
                          className="h-[80%] w-[88%] object-cover object-center"
                          src={frontend.projectPoster.url}
                          alt=""
                        />
                      </div>
                    ))
                  }
                {
                    allbackend?.map((backend , index )=>(
                        <div key={index} 
                        style={{ backgroundColor: colors[index % colors.length] }}
                        
                        className='shrink-0 h-full w-[30vw] bg-[#D1D0D1] flex justify-center items-center'>
                            <img className='h-[80%] w-[88%] object-cover object-center' src={backend.projectPoster.url} alt="" />
                        </div>
                    )) 
                }
                {/* test */}
                {/* {
                    AllMern?.map((mern, index) => (
                        <div
                        key={index}
                        style={{ backgroundColor: colors[index % colors.length] }}
                        className='shrink-0 h-full w-[30vw] relative left-[-7vw] flex justify-center items-center'
                        >
                        <img className='h-[80%] w-[88%] object-cover object-center' src={mern.projectPoster.url} alt="" />
                        </div>
                    ))
                }

                {
                    alluiux?.map((uiux , index )=>(
                        <div key={index} 
                        
                        style={{ backgroundColor: colors[index % colors.length] }}
                        
                        className='shrink-0 h-full w-[30vw] bg-[#D1D0D1] relative left-[-7vw] flex justify-center items-center'>
                            <img className='h-[80%] w-[88%] object-cover object-center' src={uiux.projectPoster.url} alt="" />
                        </div>
                    )) 
                } */}
        </motion.div>

        <motion.div style={{x:x2}} className=' h-[43vh] w-[130vw] max-xl:h-[35vh] relative left-[-15vw]  whitespace-nowrap flex gap-8 overflow-x-hidden no-scrollbar'>
            {
                allfrontend?.map((frontend , index )=>(
                    <div key={index} 
                    style={{ backgroundColor: colors[index % colors.length] }} 
                    className='shrink-0 h-full w-[30vw] bg-[#D1D0D1] flex justify-center items-center'>
                        <img className='h-[80%] w-[88%] object-cover object-center' src={frontend.projectPoster.url} alt="" />
                    </div>
                )) 
            }
            {
                allbackend?.map((backend , index )=>(
                    <div key={index} 
                    style={{ backgroundColor: colors[index % colors.length] }}
                    
                    className='shrink-0 h-full w-[30vw] bg-[#D1D0D1] flex justify-center items-center'>
                        <img className='h-[80%] w-[88%] object-cover object-center' src={backend.projectPoster.url} alt="" />
                    </div>
                )) 
            }
        </motion.div>

    </div>
  )
}

export default Templetes