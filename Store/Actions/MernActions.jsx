import axios from "../../utils/axios.jsx";
import { addAllMern  ,addSingleMern,iserror , removeerror } from "../Reducers/MernReducer.jsx";

export const asyncAllMern = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findMernProjects")
        dispatch(addAllMern(data.allMern))
        console.log(data.allMern)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncSingleMern = (mernid) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/findSingleMernProjects/${mernid}`)
        dispatch(addSingleMern(data.singleMern))
        console.log(data.singleMern)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}