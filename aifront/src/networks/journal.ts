import axios from "axios";
import { JournalRequest, JournalResponse } from '../types/journal'

export const createJournal = async (body: JournalRequest) => {
    const res = await axios.post<JournalResponse>('/api/journals', body)
    return res
}