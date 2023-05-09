export type BoardModel = {
    success: boolean,
    totalPages : number,
    totalElements : number,
    page : number,
    numOfItems : number,
    items : { 
        id: number;
        category: string;
        title: string;
        comments: number;
        content: string;
        writer: string;
        views: number;
        createdAt: string;
    }
}

export type PostBoard = {
    category: string;
    title: string;
    content: string;
}