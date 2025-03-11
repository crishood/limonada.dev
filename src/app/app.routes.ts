import { Routes } from '@angular/router';
import { FEATURES_CONSTANTS } from './core/constants/features.constants';

export const routes: Routes = [
  {
    path: FEATURES_CONSTANTS.BIO.PATH,
    loadComponent: () =>
      import('./presentation/features/bio/bio.component').then(
        (m) => m.BioComponent
      ),
  },
  {
    path: FEATURES_CONSTANTS.PROJECTS.PATH,
    loadComponent: () =>
      import('./presentation/features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: FEATURES_CONSTANTS.EXPERIENCE.PATH,
    loadComponent: () =>
      import('./presentation/features/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  { path: '', redirectTo: FEATURES_CONSTANTS.BIO.PATH, pathMatch: 'full' },
  { path: '**', redirectTo: FEATURES_CONSTANTS.BIO.PATH },
];
