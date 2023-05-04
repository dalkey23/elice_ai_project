import axios from "axios";
import { LoginUser, UserdataRequest } from "../../Types/Userdata.type";

export const createUserdata = async (body: UserdataRequest) => {
    const res = await axios.post<UserdataRequest>(
        "http://localhost:3500/api/users/sign-up",
        body
    );
    return res;
};

export const loginUser = async (body: LoginUser) => {
    const res = await axios.post<LoginUser>(
        "http://localhost:3500/api/users/login",
        body
    );
    console.log(res)
    return res;
};
