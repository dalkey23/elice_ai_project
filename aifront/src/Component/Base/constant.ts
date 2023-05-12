import { AxiosRequestConfig } from "axios";

const token = localStorage.getItem("token");

export const config:AxiosRequestConfig = {
        headers:{Authorization: `Bearer ${token}`}
    }