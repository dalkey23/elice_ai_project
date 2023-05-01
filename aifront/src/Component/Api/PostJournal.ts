import axios from "axios";
import { JournalRequest, JournalResponse } from "../../Types/JournalResReq.type";

export const createJournal = async (body: JournalRequest) => {
    const res = await axios.post<JournalRequest>('http://localhost:3500/api/diaries', body);
    return res;
};

export const getJournals = async () => {
    const res = await axios.get<JournalResponse>('http://localhost:3500/api/diaries');
    return res;
};