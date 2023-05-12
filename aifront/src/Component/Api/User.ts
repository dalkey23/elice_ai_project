import axios, { AxiosRequestConfig } from "axios";
import {
    LoginInfo,
    LoginUser,
    UserDetail,
    UserdataRequest,
} from "../../Types/Userdata.type";

const baseURL = process.env.URL;

export const createUserdata = async (body: UserdataRequest) => {
    const res = await axios.post<UserdataRequest>(
        "http://localhost:3500/api/users/sign-up",
        body
    );
    return res;
};

export const loginUser = async (body: LoginUser) => {
    const res = await axios.post<LoginInfo>(
        `http://localhost:3500/api/users/login`,
        body
    );
    return res;
};

export const getUserdata = async (id: number) => {
    const token = localStorage.getItem("token");
    const config:AxiosRequestConfig = {
        headers:{Authorization: `Bearer ${token}`}
    }
    console.log(token)
    const res = await axios.post<UserDetail>(
        `http://localhost:3500/api/users/${id}/profile`,{}, config
    );
    console.log(`api res : ${res}`);
    return res;
};
