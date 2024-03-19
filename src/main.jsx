import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper.jsx';
import 'animate.css'
import ScrollToTopOnPathChange from './Components/animation.js';


ReactDOM.createRoot(document.getElementById('root')).render(

      <Wrapper>
        <BrowserRouter >
          <ScrollToTopOnPathChange/>
          <App />
        </BrowserRouter>
      </Wrapper>
);
