import axios from "../../utils/axios.jsx";
import { addadmin  , iserror , removeerror, removeadmin } from "../Reducers/Reducer.jsx";

export const asynccurrentadmin = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin")
        dispatch(addadmin(data))
        console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
