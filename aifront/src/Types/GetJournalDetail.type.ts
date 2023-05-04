export type JournalDetail = {
    id : number;
    userid : number;
    recommendedFood : null;
    diaryEmotion : null;
    title : string;
    content : string;
    weather : null;
    publishedDate : string;
    createdAt : string;
    // diary 타입 issue 등록 예정
    diary : any;
  }

  export type JournalDetailResponse = {
    success : boolean;
    item : JournalDetail;
  };