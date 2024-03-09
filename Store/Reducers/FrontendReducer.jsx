import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllFrontend:null,
    SingleFrontend:null,
    errors:[],
}

export const FrontendReducer = createSlice({
    name:"Frontend",
    initialState,

    reducers:{

    addAllFrontend:(state,action) =>{
    state.AllFrontend = action.payload
    },
    addSingleFrontend:(state,action) =>{
    state.SingleFrontend = action.payload
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
    addAllFrontend,
    addSingleFrontend,
    iserror,
    removeerror 
} = FrontendReducer.actions

export default FrontendReducer.reducer