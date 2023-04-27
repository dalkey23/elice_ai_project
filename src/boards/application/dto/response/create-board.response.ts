import { Board, BoardCategory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardResponse {
  id: number;
  userId: number;
  category: BoardCategory;
  views: number;
  title: string;
  content: string;
  createdAt: Date;

  constructor(
    id: number,
    userId: number,
    category: BoardCategory,
    views: number,
    title: string,
    content: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.userId = userId;
    this.category = category;
    this.views = views;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }

  static fromEntities(board: Board): CreateBoardResponse {
    const { id, userId, category, title, views, content, createdAt } = board;

    return new CreateBoardResponse(
      Number(id),
      Number(userId),
      category,
      views,
      title,
      content,
      createdAt,
    );
  }
}
