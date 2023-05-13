export type JournalDetail = {
    id : number;
    userid : number;
    recommendedFood : null;
    emotion : null;
    title : string;
    content : string;
    weather : null;
    publishedDate : string;
    createdAt : string;
  }

  export type JournalDetailResponse = {
    success : boolean;
    item : JournalDetail;
  };