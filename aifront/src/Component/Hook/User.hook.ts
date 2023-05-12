import { useMutation, useQuery } from "react-query";
import { createUserdata, getUserdata, loginUser } from "../Api/User";

export const useJoinUser = () => {
    const { mutateAsync, isError } = useMutation(createUserdata);
    return {
        createUserdata: mutateAsync,
        isError,
    };
};

export const useLoginUser = () => {
    const { mutateAsync, isError, data } = useMutation(loginUser);
    return {
        loginUser: mutateAsync,
        isError,
        data,
    };
};

export const useGetUserdata = (id:number) => {
    const { data } = useQuery(["getUsetdata", id], () => {
        return getUserdata(id);
    });

    console.log(`hook res : ${data}`);

    return {
        data,
    };
};
