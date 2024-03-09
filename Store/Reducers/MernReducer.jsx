import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllMern:null,
    SingleMern:null,
    errors:[],
}

export const MernReducer = createSlice({
    name:"Mern",
    initialState,
    reducers:{

    addAllMern:(state,action) =>{
    state.AllMern = action.payload
    },
    addSingleMern:(state,action) =>{
    state.SingleMern = action.payload
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
    addAllMern,
    addSingleMern,
    iserror,
    removeerror 
} = MernReducer.actions

export default MernReducer.reducer