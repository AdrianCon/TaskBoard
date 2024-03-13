export interface Task {
  id?: number;
  title: string;
  description: string;
  icon: number;
  status: number | undefined;
  createdAt?: string;
}