import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  asyncsigninadmin, asyncsignoutadmin } from '../../Store/Actions/Actions'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const { admin , isAuthenticated } = useSelector((state)=>state.Admin)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const SignInHandler = async(e)=>{
        e.preventDefault()
        const admin = {
            email,
            password
        }
        await dispatch(asyncsigninadmin(admin))
    }

    const SignOutHandler = async(e)=>{
        e.preventDefault()
        await dispatch(asyncsignoutadmin(admin))
    }

    
    
    return (
    <div className='h-screen w-screen flex justify-center items-center max-phone:px-4 max-phone:' >
        {
            isAuthenticated === true ?
            <div className='flex justify-center mt-6 px-44'>
                <button onClick={SignOutHandler} type='submit' className=' rounded-xl capitalize py-2 px-6 max-phone:px-10 max-phone:py-2  flex justify-center bg-black text-white'>
                    Logout
                </button>
            </div>
            :
            <div className=' border-[1px] py-6 px-4 border-black rounded-xl '>
                <form onSubmit={SignInHandler}  className='flex flex-col '>
                    <label className='text-xl '>Email Address</label>
                    <input onChange={(e)=>setemail(e.target.value)} className='border-2 border-[#00000061]  py-2  rounded-md px-2 mt-4' placeholder='Email Address'  type="email"  />
                    <label className='text-xl mt-6'>Password</label>
                    <input onChange={(e)=>setpassword(e.target.value)} className='border-2 border-[#00000061]  py-2 rounded-md px-2 mt-4' placeholder='Password'  type="password" />
                    
                    <div className='flex justify-center mt-6 px-44'>
                        <input type="submit" className=' rounded-xl capitalize py-2 px-6 max-phone:px-10 max-phone:py-2  flex justify-center bg-black text-white' />
                    </div>
                </form>
            </div>
        }
    </div>
  )
}

export default SignIn