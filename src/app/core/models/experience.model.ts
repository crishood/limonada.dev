import { Tool } from './tools.model';

export interface Experience {
  name: string;
  description: string;
  image?: string;
  startDate: string;
  endDate?: string;
  tools: Tool[];
}
