import { Tool } from './tools.model';

export interface Project {
  name: string;
  description: string;
  image: string;
  url?: string;
  tools: Tool[];
}
