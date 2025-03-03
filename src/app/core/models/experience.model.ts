import { Tool } from './tools.model';

export interface Experience {
  company: string;
  companyUrl: string;
  image: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  tools: Tool[];
}
