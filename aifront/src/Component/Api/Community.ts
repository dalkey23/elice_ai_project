import axios from "axios";
import { BoardDetail, BoardModel, PostBoard, DeleteBoard, EditBoard } from "../../Types/Community.type";

export const getCommunityList = async (page: number, elements: number,) => {
    const res = await axios.get<BoardModel>(`http://kdt-ai6-team02.elicecoding.com/api/boards?page=${page}&elements=${elements}`);
    return res;
};

export const postCommunity = async (body: PostBoard) => {
    const res = await axios.post<PostBoard>('http://kdt-ai6-team02.elicecoding.com/api/boards', body);
    return res;
};

export const getCommunityDetail = async (id : number) => {
    const res = await axios.get<BoardDetail>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`);
    return res;
};

export const editCommunity = async (id : number, body: PostBoard) => {
    const res = await axios.put<EditBoard>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`, body);
    console.log(res);
    return res;
};

export const deleteCommunity = async (id : number) => {
    const res = await axios.delete<DeleteBoard>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`);
    return res;
};