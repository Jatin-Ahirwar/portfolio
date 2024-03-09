import { configureStore } from "@reduxjs/toolkit";
import { AdminReducer } from "./Reducers/Reducer.jsx";
import { BackendReducer } from "./Reducers/BackendReducer.jsx";
import { MernReducer } from "./Reducers/MernReducer.jsx";
import { UiUxReducer } from "./Reducers/UiUxReducer.jsx";
import { FrontendReducer } from "./Reducers/FrontendReducer.jsx";
export const store = configureStore({
    reducer:{
        AdminReducer,
        FrontendReducer,
        BackendReducer,
        MernReducer,
        UiUxReducer,
    }
})
