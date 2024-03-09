import axios from "../../utils/axios.jsx";
import { addAllFrontend , iserror , removeerror } from "../Reducers/FrontendReducer.jsx";

export const asyncAllFrontend = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/findFrontendProjects")
        dispatch(addAllFrontend(data.allFrontend))
        console.log(data.allFrontend)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
