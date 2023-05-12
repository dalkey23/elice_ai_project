import { useMutation, useQuery } from "react-query";
import { createUserdata, loginUser, getLoginedUser } from "../Api/User";

export const useJoinUser = () => {
    const { mutate, isError } = useMutation(createUserdata)
    return {
        createUserdata : mutate,
        isError
    }
}

export const useLoginUser = () => {
    const { mutate, isError, data } = useMutation(loginUser)
    return {
        loginUser : mutate,
        isError,
        data
    }
}

export const useGetLoginedUser = () => {

    const { data } = useQuery(["getLoginedUser"], () => {
        return getLoginedUser();
    });

    return {
        data,
        isLogined: !!data
    }
}