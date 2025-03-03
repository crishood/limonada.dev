import { Tool } from './tools.model';

export interface Bio {
  name: string;
  roles: string[];
  description: string;
  image: string;
  location: string;
  university: string;
  degree: string;
  certifications: Certification[];
  tools: Tool[];
}

export interface Certification {
  name: string;
  organization: string;
  issueYear: number;
  credentialId?: string;
}
