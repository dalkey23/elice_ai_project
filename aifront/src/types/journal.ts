
export type JournalResponse = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

export type JournalRequest = {
  name: string;
  description: string;
}