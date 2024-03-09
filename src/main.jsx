import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Wrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Wrapper>
);
