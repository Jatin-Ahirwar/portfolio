import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../Store/Store.jsx';
import Wrapper from '../Wrapper/Wrapper.jsx';
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Wrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Wrapper>
);
