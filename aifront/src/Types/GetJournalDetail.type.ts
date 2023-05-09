export type JournalDetail = {
  diary : {
    id : number;
    userid : number;
    recommendedFood : null;
    diaryEmotion : null;
    title : string;
    content : string;
    weather : null;
    publishedDate : string;
    createdAt : string;
  }
  }

  export type JournalDetailResponse = {
    success : boolean;
    item : JournalDetail;
  };