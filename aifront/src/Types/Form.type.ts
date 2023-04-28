import { JournalRequest } from "./journal.type"

export type JournalSubmit = {
    onSubmit : (form: JournalRequest) => void;
}