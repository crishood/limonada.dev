import { Experience } from './experience.model';

export interface Project extends Experience {
  projectUrl?: string;
  status: ProjectStatus;
}

export enum ProjectStatus {
  IN_REVIEW = 'in-review',
  IN_DEVELOPMENT = 'in-development',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}
