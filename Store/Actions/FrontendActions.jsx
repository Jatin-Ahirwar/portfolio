import axios from "../../utils/axios.jsx";
import { addallFrontend , addsinglefrontend, iserror , removeerror } from "../Reducers/FrontendReducer.jsx";

export const asyncAllFrontend = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findFrontendProjects")
        dispatch(addallFrontend(data.allFrontend))
        console.log(data.allFrontend)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncCreateFrontend = (frontendid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/CreateFrontend` , frontendid)
        dispatch(asyncAllFrontend())
        console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncSingleFrontend = (frontendid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/findSingleFrontendProjects/${frontendid}`)
        dispatch(addsinglefrontend(data.singleFrontend))
        console.log(data.singleFrontend)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}