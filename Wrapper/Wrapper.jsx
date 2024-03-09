import React from 'react'
import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
import { store } from '../Store/Store.jsx';

const Wrapper = ({ children }) => {
  return (
        <Provider store={store}>
            {children}
            {/* <ToastContainer style={{zIndex:"999999"}} /> */}
        </Provider>
  )
}

export default Wrapper