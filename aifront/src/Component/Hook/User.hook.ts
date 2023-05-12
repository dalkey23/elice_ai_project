import { useMutation, useQuery } from "react-query";
import { createUserdata, loginUser } from "../Api/User";

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