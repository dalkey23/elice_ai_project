import axios from "axios";
import { JournalRequest, JournalListResponse, JournalResponse } from "../../Types/JournalPost.type";

export const createJournal = async (body: JournalRequest) => {
    const res = await axios.post<JournalResponse>('http://kdt-ai6-team02.elicecoding.com/api/diaries', body);
    return res;
};

export const getJournals = async (page: number, elements: number,) => {
    const res = await axios.get<JournalListResponse>(`http://kdt-ai6-team02.elicecoding.com/api/diaries?page=${page}&elements=${elements}`);
    return res;
};