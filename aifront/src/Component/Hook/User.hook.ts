import { useMutation, useQuery } from "react-query";
import { createUserdata, loginUser, getLoginedUser, editUserdata, deleteUser } from "../Api/User";
import { UserdataRequest } from "../../Types/Userdata.type";

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

// export const useEditUser = () => {
//     const { mutateAsync: editUserdataAsync, isError } = useMutation(editUserdata);
  
//     return {
//         editUserdata: editUserdataAsync,
//       isError
//     };
//   };

  export const useDeleteUser = () => {
    const { mutateAsync, isError } = useMutation(deleteUser);
  
    return {
        deleteUser: mutateAsync, isError
    }
  }