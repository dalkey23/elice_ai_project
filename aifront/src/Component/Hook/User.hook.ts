import { useMutation, useQuery } from "react-query";
import { createUserdata, loginUser } from "../Api/User";

export const useJoinUser = () => {
    const { mutate } = useMutation(createUserdata)
    return {
        createUserdata : mutate
    }
}

export const useLoginUser = () => {
    const { mutate } = useMutation(loginUser)
    return {
        loginUser : mutate
    }
}