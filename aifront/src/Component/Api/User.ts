import axios from "axios";
import { config } from "../Base/Constant";
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

export const getLoginedUser = async () => {

    const res = await axios.post<UserDetail>(
        `http://localhost:3500/api/users/profile`,{}, config
    );
    console.log(`api res : ${res}`);
    return res;
};
