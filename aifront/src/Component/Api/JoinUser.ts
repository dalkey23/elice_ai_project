import axios from "axios";
import { UserdataRequest } from "../../Types/Userdata.type";


export const createUserdata = async (body: UserdataRequest) => {
    const res = await axios.post<UserdataRequest>('http://localhost:3500/api/users/sign-up', body);
    return res;
}

