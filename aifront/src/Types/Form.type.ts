import { JournalRequest } from './Journal.type';

export type JournalSubmit = {
    onSubmit : (form: JournalRequest) => void;
}