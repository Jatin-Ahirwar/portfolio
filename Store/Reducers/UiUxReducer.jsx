import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alluiux:null,
    singleuiux:null,
    errors:[],
}

export const UiUxReducer = createSlice({
    name:"UiUx",
    initialState,
    reducers:{

    addalluiux:(state,action) =>{
    state.alluiux = action.payload
    },
    addsingleuiux:(state,action) =>{
    state.singleuiux = action.payload
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
    addalluiux,
    addsingleuiux,
    iserror,
    removeerror 
} = UiUxReducer.actions

export default UiUxReducer.reducer