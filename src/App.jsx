import React, { useEffect } from 'react'
import Nav from './Components/Nav'
import './index.css'; 
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Work from './Components/Work';
import Templetes from './Components/Templetes';
import Footer from './Components/Footer';
import AllWork from './Components/AllWork';
import LocomotiveScroll from 'locomotive-scroll';
import About from './Components/About';
import Socials from './Components/Socials';
import NotFound from './Components/NotFound';
import AllFrontend from './Components/AllFrontend';
import AllMern from './Components/AllMern';
import Alluiux from './Components/Alluiux';
import AllBackend from './Components/AllBackend';
import SingleFrontend from './Components/SingleFrontend';
import SingleBackend from './Components/SingleBackend';
import SingleMern from './Components/SingleMern';
import SingleUiUx from './Components/SingleUiUx';
import SignIn from './Components/SignIn';
import { useDispatch } from 'react-redux';
import { asynccurrentadmin } from '../Store/Actions/Actions';
import Create from './Components/Create';

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asynccurrentadmin())
  },[])

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='animate__animated animate__fadeIn w-screen min-h-screen overflow-x-hidden bg-[#FCFCFC]'>
        <Nav />
        <Routes>

          <Route path='/myportfolio/signin' element={<>
            <SignIn/>
            <Footer />
            </>
          }/>

          <Route path='/' element={<>
              <Create />
              <Homepage />
              <Work />
              <Templetes />
              <Footer />
            </>
          }/>

          <Route path='/work' element={<>
            <AllWork />
            <AllFrontend/>
            <AllBackend/>
            <AllMern/>
            <Alluiux/>
            <Footer/>
          </> }/>

          <Route path='/work/frontend' element={<>
            <AllWork />
            <AllFrontend />
            <Footer/>
          </> }/>

          <Route path='/work/frontend/singlefrontend/:frontendid' element={<>
            <SingleFrontend />
            <Footer/>
          </> }/>


          <Route path='/work/backend' element={<>
            <AllWork />
            <AllBackend />
            <Footer/>
          </> }/>

          <Route path='/work/backend/singlebackend/:backendid' element={<>
            <SingleBackend/>
            <Footer/>

          </> }/>


          <Route path='/work/mern' element={<>
            <AllWork />
            <AllMern/>
            <Footer/>
          </> }/>

          <Route path='/work/mern/singlemern/:mernid' element={<>
            <SingleMern/>
            <Footer/>

          </> }/>

          <Route path='/work/uiux' element={<>
            <AllWork />
            <Alluiux/>
            <Footer/>
          </> }/>

          <Route path='/work/uiux/singleuiux/:uiuxid' element={<>
            <SingleUiUx/>
            <Footer/>

          </> }/>

          <Route path='/about' element={<>
            <About />
            <Footer/>
          </>
          }/>
          
          <Route path='/contact' element={<>
            <Socials />
            <Footer />
          </>
          }/>

          <Route path='*' element={<NotFound/>} />

        </Routes>
    </div>
  )
}   

export default App