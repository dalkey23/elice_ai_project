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

  export type Journal = {
    diaryEmotion:null;
    id:number;
    publishedDate:string;
    recommendedFood:null;
    title:string;
  }

  export type JournalListResponse = {
    success : boolean;
    items : Journal[];
    numOfItems : number;
    totalElements : number;
    page : number;
    totalPages: number;
  };