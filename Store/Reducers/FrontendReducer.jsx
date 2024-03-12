import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allfrontend:null,
    singlefrontend:null,
    errors:[],
}

export const FrontendReducer = createSlice({
    name:"Frontend",
    initialState,

    reducers:{

    addallFrontend:(state,action) =>{
    state.allfrontend = action.payload
    },
    addsinglefrontend:(state,action) =>{
    state.singlefrontend = action.payload
    },
    iserror:(state,action) =>{
    state.errors.push(action.payload)
    },
    removeerror:(state,action) =>{
    state.errors =[]
    }
  }
})

export const {
    addallFrontend,
    addsinglefrontend,
    iserror,
    removeerror 
} = FrontendReducer.actions

export default FrontendReducer.reducer