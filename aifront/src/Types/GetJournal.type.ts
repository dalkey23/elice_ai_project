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
  