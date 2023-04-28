import axios from "axios";
import { JournalRequest, JournalResponse } from "../../Types/journal.type";

export const createJournal = async (body: JournalRequest) => {
    const res = await axios.post<JournalRequest>('http://localhost:3500/api/diaries', body) // localhost:3500 부분을 상수나 환경변수로
    return res;
};

export const getJournals = async () => {
    const res = await axios.post<JournalResponse[]>('URL')
    return res
};