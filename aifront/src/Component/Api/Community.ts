import axios from "axios";
import { BoardModel, PostBoard } from "../../Types/Community.type";

export const postCommunity = async (body: PostBoard) => {
    const res = await axios.post<BoardModel>('http://kdt-ai6-team02.elicecoding.com/api/boards', body);
    return res;
};

export const getCommunityDetail = async (id : number) => {
    const res = await axios.get<BoardModel>(`http://kdt-ai6-team02.elicecoding.com/api/boards/${id}`);
    console.log(res)
    return res;
};