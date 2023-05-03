import { useMutation, useQuery } from "react-query";
import { createUserdata } from "../Api/JoinUser";

export const useJoinUser = () => {
    const { mutate } = useMutation(createUserdata)
    return {
        createUserdata : mutate
    }
}