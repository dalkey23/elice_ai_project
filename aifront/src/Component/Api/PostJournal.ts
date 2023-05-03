import axios from "axios";
import { JournalRequest, JournalResponse } from "../../Types/JournalPost.type";
import { JournalListResponse } from "../../Types/GetJournal.type";
import { JournalDetailResponse } from "../../Types/GetJournalDetail.type";

export const createJournal = async (body: JournalRequest) => {
    const res = await axios.post<JournalResponse>('http://kdt-ai6-team02.elicecoding.com/api/diaries', body);
    return res;
};

export const getJournals = async (page: number, elements: number,) => {
    const res = await axios.get<JournalListResponse>(`http://kdt-ai6-team02.elicecoding.com/api/diaries?page=${page}&elements=${elements}`);
    return res;
};

export const getJournalsDetail = async (id : number) => {
    const res = await axios.get<JournalDetailResponse>(`http://kdt-ai6-team02.elicecoding.com/api/diaries?id=${id}`);
    return res;
};