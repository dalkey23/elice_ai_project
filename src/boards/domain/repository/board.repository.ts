import { Board } from '@prisma/client';

export interface BoardRepository {
  // Board를 생성하는 메소드
  create(board: Omit<Board, 'id'>): Promise<Board>;

  findAliveBoardById(id: number): Promise<Board | null>;

  deleteById(id: number): Promise<Board>;

  //findLists(page: PageRequest): Promise<object>;
}
