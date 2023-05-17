export type JournalDetail = {
    id : number;
    userid : number;
    recommendedFood : null;
    emotion : string;
    emotionScores : string;
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