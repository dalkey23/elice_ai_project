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
        "http://kdt-ai6-team02.elicecoding.com/api/users/sign-up",
        body
    );
    return res;
};

export const loginUser = async (body: LoginUser) => {
    const res = await axios.post<LoginInfo>(
        `http://kdt-ai6-team02.elicecoding.com/api/users/login`,
        body
    );
    return res;
};

export const getLoginedUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios.post<UserDetail>(
        `http://kdt-ai6-team02.elicecoding.com/api/users/profile`,
        {},
        config
    );

    return res;
};

export const deleteUser = async (id: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.delete(
        `http://kdt-ai6-team02.elicecoding.com/api/users/${id}`,
        config
    );
    console.log(res);
    return res;
};

export const editUserdata = async ({
    id,
    body,
}: {
    id: Number | undefined;
    body: UserdataRequest | undefined;
}): Promise<UserDetail> => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };

    if (id == undefined || body == undefined) {
        throw new Error("id or userdata undefined");
    }
    const res = await axios.put<UserDetail>(
        `http://localhost:3500/api/users/${id}`,
        body,
        config
    );
    return res?.data;
};
