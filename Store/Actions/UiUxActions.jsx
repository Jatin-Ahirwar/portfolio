import axios from "../../utils/axios.jsx";
import { addalluiux ,addsingleuiux,iserror , removeerror } from "../Reducers/UiuxReducer.jsx";

export const asyncAllUiux = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findUiUxProjects")
        dispatch(addalluiux(data.allUiUx))
        console.log(data.allUiUx)
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