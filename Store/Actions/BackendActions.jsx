import axios from "../../utils/axios.jsx";

import { addallbackend , addsinglebackend ,iserror , removeerror } from "../Reducers/BackendReducer.jsx";

export const asyncAllBackend = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findBackendProjects")
        dispatch(addallbackend(data.allBackend))
        // console.log(data.allBackend)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncCreateBackend = (backendid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/CreateBackend` , backendid)
        dispatch(asyncAllBackend())
        // console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncSingleBackend = (backendid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/findSingleBackendProjects/${backendid}`)
        dispatch(addsinglebackend(data.singleBackend))
        // console.log(data.singleBackend)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}