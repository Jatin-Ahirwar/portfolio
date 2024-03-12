import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allbackend:null,
    singlebackend:null,
    errors:[],
}

export const BackendReducer = createSlice({
    name:"Backend",
    initialState,

    reducers:{

    addallbackend:(state,action) =>{
    state.allbackend = action.payload
    },
    addsinglebackend:(state,action) =>{
    state.singlebackend = action.payload
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
    addallbackend,
    addsinglebackend,
    iserror,
    removeerror 
} = BackendReducer.actions

export default BackendReducer.reducer