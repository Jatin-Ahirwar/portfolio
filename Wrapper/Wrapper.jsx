import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux';
import { store } from '../Store/Store.jsx';
import { ToastContainer } from 'react-toastify';
import { asynccurrentadmin } from '../Store/Actions/Actions.jsx';

const Wrapper = ({ children }) => {
  return (
        <Provider store={store}>
            {children}
            <ToastContainer style={{zIndex:"999999"}} />
        </Provider>
  )
}

export default Wrapper