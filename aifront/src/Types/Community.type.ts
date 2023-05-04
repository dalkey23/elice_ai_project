export type BoardModel = {
    id: number;
    category: string;
    title: string;
    comments: number;
    content: string;
    writer: string;
    views: number;
    createdAt: string;
}

export type PostBoard = {
    category: string;
    title: string;
    content: string;
}