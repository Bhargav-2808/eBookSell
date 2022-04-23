import axios from "axios";

const URL = "http://localhost:6500";

const registerUser = async(user)=>{
    return axios.post(`${URL}/registerUser`,user)
}
const loginUser = async(user)=>{
    return axios.post(`${URL}/loginUser`,user)
}

export {registerUser, loginUser};