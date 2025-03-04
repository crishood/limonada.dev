import { Copy } from '@core/models/copy.model';
import { Bio } from '../models/bio.model';

export const BIO_COPY: Copy<Bio> = {
  EN: {
    name: 'Cris Cepeda',
    description: 'Bio',
    roles: [
      'Software Engineer',
      'Full Stack Developer',
      'Beatmaker',
      'Angular Developer',
      'Frontend Developer',
    ],
    image: '',
    location: 'Medellin, Colombia',
    university: 'Universidad Militar Nueva Granada',
    degree: 'Multimedia Engineer',
    certifications: [],
    tools: [],
  },
  ES: {
    name: 'Cristhian Cepeda',
    description: 'Bio',
    roles: [
      'Ingeniero de Software',
      'Desarrollador Full Stack',
      'Beatmaker',
      'Desarrollador Angular',
      'Desarrollador Frontend',
    ],
    image: '',
    location: 'Medellin, Colombia',
    university: 'Universidad Militar Nueva Granada',
    degree: 'Ingeniero Multimedia',
    certifications: [],
    tools: [],
  },
};
