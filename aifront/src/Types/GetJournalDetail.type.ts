export type JournalDetail = {
    publishedDate:string;
    recommendedFood:null;
    title:string;
    content:string;
  }

  export type JournalDetailResponse = {
    success : boolean;
    items : JournalDetail[];
  };