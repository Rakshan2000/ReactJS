import axios from "axios";
const Port = 3000;
export const callRegisterUserApi = async (data) => {
    const response = await axios.post(`http://localhost:${Port}/api/user/register`, data,{withCredentials:true});
    return response?.data;
};

export const callLoginUserApi = async (data) => {
    const response = await axios.post(`http://localhost:${Port}/api/user/login`, data,{withCredentials:true});
    return response?.data;
}

export const callLogoutUSerApi = async () =>{
    const response = await axios.post(`http://localhost:${Port}/api/user/logout`, data, {withCredentials});
    return response?.data;
}