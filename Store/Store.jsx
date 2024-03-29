import { configureStore } from "@reduxjs/toolkit";
import AdminReducer  from "./Reducers/Reducer.jsx";
import BackendReducer  from "./Reducers/BackendReducer.jsx";
import MernReducer  from "./Reducers/MernReducer.jsx";
import FrontendReducer  from "./Reducers/FrontendReducer.jsx";
import UiUxReducer  from "./Reducers/UiUxReducer.jsx";

export const store = configureStore({

    reducer:{
        Admin:AdminReducer,
        Frontend:FrontendReducer,
        Backend:BackendReducer,
        Mern:MernReducer,
        UiUx:UiUxReducer
    }
})
