import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper.jsx';
import 'animate.css'
import ScrollToTopOnPathChange from './Components/animation.js';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <SkeletonTheme baseColor="#eee" highlightColor="#cfcece">
      <Wrapper>
        <BrowserRouter >
          <ScrollToTopOnPathChange/>
          <App />
        </BrowserRouter>
      </Wrapper>
    </SkeletonTheme>

);
