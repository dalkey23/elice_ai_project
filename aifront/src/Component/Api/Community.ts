import axios from "axios";
import { BoardDetail, BoardModel, PostBoard } from "../../Types/Community.type";

export const getCommunityList = async (page: number, elements: number,) => {
    const res = await axios.get<BoardModel>(`http://kdt-ai6-team02.elicecoding.com/api/boards?page=${page}&elements=${elements}`);
    console.log(res)
    return res;
};

export const postCommunity = async (body: PostBoard) => {
    const res = await axios.post<PostBoard>('http://kdt-ai6-team02.elicecoding.com/api/boards', body);
    return res;
};

export const getCommunityDetail = async (id : number) => {
    const res = await axios.get<BoardDetail>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`);
    console.log(res)
    return res;
};