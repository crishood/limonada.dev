import { Menu } from '../models/menu.model';
import { FEATURES_CONSTANTS } from './features.constants';

export const MENU_CONSTANTS: Menu = {
  items: [
    { label: FEATURES_CONSTANTS.BIO.NAME, path: FEATURES_CONSTANTS.BIO.PATH },
    {
      label: FEATURES_CONSTANTS.PROJECTS.NAME,
      path: FEATURES_CONSTANTS.PROJECTS.PATH,
    },
    {
      label: FEATURES_CONSTANTS.EXPERIENCE.NAME,
      path: FEATURES_CONSTANTS.EXPERIENCE.PATH,
    },
  ],
};
