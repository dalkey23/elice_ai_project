export type Board = {
    id: number;
    authorName: string;
    category: string;
    views: number;
    title: string;
    content: string;
    commentCount?: number;
    commentList?: BoardComment[];
    createdAt: string;
}

export type BoardModel = {
    success: boolean;
    totalPages : number;
    totalElements : number;
    page : number;
    numOfItems : number;
    items : Board[];
}

export type BoardComment = {
    id: string;
    content: string;
}

export type PostBoard = {
    category: string;
    title: string;
    content: string;
}

export type BoardDetail = {
    item?: Board;
    success: boolean;
}

export type EditBoard = {
    item?: PostBoard;
    success: boolean;
}

export type DeleteBoard = {
    item: {
        id: number;
        deletedAt: string;
        isDeleted: boolean;
    };
    success: boolean;
}