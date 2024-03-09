import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllBackend:null,
    SingleBackend:null,
    errors:[],
}

export const BackendReducer = createSlice({
    name:"Backend",
    initialState,
    reducers:{

    addAllBackend:(state,action) =>{
    state.AllBackend = action.payload
    },
    addSingleBackend:(state,action) =>{
    state.SingleBackend = action.payload
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
    addAllBackend,
    addSingleBackend,
    iserror,
    removeerror 
} = BackendReducer.actions

export default BackendReducer.reducer