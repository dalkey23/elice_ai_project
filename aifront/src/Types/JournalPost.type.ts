export type JournalRequest = {
  title : string;
  content : string;
  publishedDate: string;
};

export type JournalResponse = {
    success : boolean;
    item : object;
    totalPages : number;
    totalElements : number;
    page : number;
    elements : number;
    diaries : object[];
    id : string;
    title : string;
  };