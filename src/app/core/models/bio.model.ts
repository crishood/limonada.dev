import { Tool } from './tools.model';

export interface Bio {
  name: string;
  roles: string[];
  description: string;
  image: string;
  location: string;
  degrees: Degree[];
  certifications: Certification[];
  tools: Tool[];
}

export interface Certification {
  name: string;
  organization: string;
  issueYear: number;
  credentialId?: string;
}

export interface Degree {
  name: string;
  institution: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress' | 'not-started' | 'uncompleted';
  credentialId?: string;
}
