import React from 'react'
import Nav from './Components/Nav'
import './index.css'; 
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Work from './Components/Work';
import Templetes from './Components/Templetes';
import Footer from './Components/Footer';
import AllWork from './Components/AllWork';
import LocomotiveScroll from 'locomotive-scroll';
import AllContent from './Components/AllContent';
import About from './Components/About';
import Socials from './Components/Socials';
import NotFound from './Components/NotFound';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-screen min-h-screen overflow-x-hidden bg-[#FCFCFC]'>
        <Nav />
        <Routes>

          <Route path='/' element={<>
              <Homepage />
              <Work />
              <Templetes />
              <Footer />
            </>
          }/>
          <Route path='/work' element={<>
            <AllWork />
            <AllContent/>
            <Footer/>
          </> }/>
          <Route path='/work/frontend' element={<>
            <AllWork />
            <Homepage/>
            <Footer/>

          </> }/>
          <Route path='/work/mern' element={<>
            <AllWork />
            <Footer/>

          </> }/>
          <Route path='/work/uiux' element={<>
            <AllWork />
            <Homepage/>
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