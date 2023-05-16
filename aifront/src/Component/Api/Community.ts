import axios, {AxiosRequestConfig} from "axios";
import { BoardDetail, BoardModel, PostBoard, DeleteBoard, EditBoard } from "../../Types/Community.type";

export const getCommunityList = async (page: number, elements: number,) => {
    const res = await axios.get<BoardModel>(`http://kdt-ai6-team02.elicecoding.com/api/boards?page=${page}&elements=${elements}`);
    return res;
};

export const postCommunity = async (body: PostBoard) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post<PostBoard>('http://kdt-ai6-team02.elicecoding.com/api/boards', body, config);
    return res;
};

export const getCommunityDetail = async (id : number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get<BoardDetail>(`http://kdt-ai6-team02.elicecoding.com/api/boards/detail/${id}`, config);
    return res;
};

export const editCommunity = async (id : number, body: PostBoard) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.patch<EditBoard>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`, body, config);
    return res;
};

export const deleteCommunity = async (id : number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.delete<DeleteBoard>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`, config);
    return res;
};

// export const postCommunityComment = async (body: PostBoardComment) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         throw new Error("Token not found in localStorage");
//     }
//     const config: AxiosRequestConfig = {
//         headers: { Authorization: `Bearer ${token}` },
//     };
//     const res = await axios.post<PostBoardComment>('http://kdt-ai6-team02.elicecoding.com/api/boards', body, config);
//     return res;
// };