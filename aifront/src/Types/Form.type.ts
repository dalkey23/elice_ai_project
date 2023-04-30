import { JournalRequest } from "./JournalResReq.type";

export type JournalSubmit = {
    onSubmit : (form: JournalRequest) => void;
}