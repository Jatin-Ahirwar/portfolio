import { toast } from "react-toastify";
import axios from "../../utils/axios.jsx";
import { addadmin  , iserror , removeerror, removeadmin } from "../Reducers/Reducer.jsx";


export const asynccurrentadmin = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin")
        dispatch(addadmin(data[0]))
        // console.log(data[0])
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncsigninadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/signin" , admin)
        dispatch(asynccurrentadmin())     
        toast.success("Successfully Logged In. ") 
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message);
    }
}


export const asyncsignoutadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/signout" , admin)
        dispatch(removeadmin())
        toast.success("Successfully Logged Out. ") 
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message);
    }
}
