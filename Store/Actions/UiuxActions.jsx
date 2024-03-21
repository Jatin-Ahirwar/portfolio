import axios from "../../utils/axios.jsx";
import { addalluiux ,addsingleuiux,iserror , removeerror } from "../Reducers/UiUxReducer.jsx";

export const asyncAllUiux = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findUiUxProjects")
        dispatch(addalluiux(data.allUiUx))
        console.log(data.allUiUx)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncCreateUiux = (uiuxid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/CreateUiUx` , uiuxid)
        dispatch(asyncAllUiux())
        console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncSingleUiux = (uiuxid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/findSingleUiUxProjects/${uiuxid}`)
        dispatch(addsingleuiux(data.singleUiUx))
        console.log(data.singleUiUx)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}