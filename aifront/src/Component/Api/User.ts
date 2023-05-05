import axios from "axios";
import { LoginInfo, LoginUser, UserdataRequest } from "../../Types/Userdata.type";

export const createUserdata = async (body: UserdataRequest) => {
    const res = await axios.post<UserdataRequest>(
        "http://localhost:3500/api/users/sign-up",
        body
    );
    return res;
};

export const loginUser = async (body: LoginUser) => {
    const res = await axios.post<LoginInfo>(
        "http://localhost:3500/api/users/login",
        body
    );
    return res;
};
