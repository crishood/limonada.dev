import { Experience } from './experience.model';

export interface Job extends Experience {
  companyUrl?: string;
  position: string;
}
