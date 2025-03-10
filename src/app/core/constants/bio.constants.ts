import { Bio } from '../models/bio.model';
import { TOOLS_CONSTANTS } from './tools.constants';

export const BIO_COPY: Bio = {
  name: 'Cristhian Cepeda',
  description: `I'm a software developer with a strong focus on front-end development with Angular, passionate about building products and crafting meaningful experiences. Beyond code, I produce music, explore creativity through writing, and enjoy deep dives into reading.`,
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'Beatmaker',
    'Angular Developer',
    'Frontend Developer',
  ],
  image: '',
  location: 'Sabaneta, Colombia',
  degrees: [
    {
      name: 'Multimedia Engineer',
      institution: 'Universidad Militar Nueva Granada',
      startDate: '2011-01',
      endDate: '2016-03',
      status: 'completed',
    },
    {
      name: 'Music Industry Arts',
      institution: 'Fanshawe College',
      startDate: '2019-09',
      endDate: '2020-04',
      status: 'uncompleted',
    },
    {
      name: 'Full Stack Developer',
      institution: 'Make It Real',
      startDate: '2021-04',
      endDate: '2021-07',
      status: 'completed',
    },
  ],
  certifications: [
    {
      name: 'Angular Mid-Level Developer',
      organization: 'Certificates.dev',
      issueYear: 2024,
    },
  ],
  tools: Object.values(TOOLS_CONSTANTS),
};
