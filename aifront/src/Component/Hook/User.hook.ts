import { useMutation, useQuery } from "react-query";
import { createUserdata, loginUser, getLoginedUser } from "../Api/User";

export const useJoinUser = () => {
    const { mutateAsync, isError } = useMutation(createUserdata)
    return {
        createUserdata : mutateAsync,
        isError
    }
}

export const useLoginUser = () => {
    const { mutateAsync, isError, data } = useMutation(loginUser)
    return {
        loginUser : mutateAsync,
        isError,
        data
    }
}

export const useGetLoginedUser = () => {

    const { data: LoginedUser, isError } = useQuery(["getLoginedUser"], () => {
        return getLoginedUser();
    });

    return {
        LoginedUser,
        isLogined: !!LoginedUser,
        isError
    }
}