import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllUiUx:null,
    SingleUiUx:null,
    errors:[],
}

export const UiUxReducer = createSlice({
    name:"UiUx",
    initialState,
    reducers:{

    addAllUiUx:(state,action) =>{
    state.AllUiUx = action.payload
    },
    addSingleUiUx:(state,action) =>{
    state.SingleUiUx = action.payload
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
    addAllUiUx,
    addSingleUiUx,
    iserror,
    removeerror 
} = UiUxReducer.actions

export default UiUxReducer.reducer