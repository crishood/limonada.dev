import { Job } from '../models/job.model';
import { TOOLS_CONSTANTS } from './tools.constants';

export const JOBS_CONSTANTS: Job[] = [
  {
    name: 'MO Credit Management Platform',
    position: 'Frontend Developer Level III',
    description:
      'I am currently working at Mo Credit Platform, where I develop and maintain the front end of credit management platforms using Angular. My role also involves creating libraries of agnostic web components with Stencil.js, ensuring reusability across different projects. Additionally, I focus on styling web portals to enhance both visual appeal and user experience, aligning design and functionality for a seamless interaction.',
    image: '',
    startDate: '2023-03',
    endDate: 'Current',
    tools: [
      TOOLS_CONSTANTS['Angular'],
      TOOLS_CONSTANTS['Sass'],
      TOOLS_CONSTANTS['JavaScript'],
      TOOLS_CONSTANTS['Stencil'],
      TOOLS_CONSTANTS['Git'],
    ],
  },
  {
    name: 'Nivelics',
    position: 'Semisenior Angular Developer',
    description:
      'At Nivelics, I was responsible for developing the Marketplace API, integrating Dr. Akí and Jelpit with Daviplata and Davivienda using Angular within the SCRUM framework and Gitflow methodology. Additionally, I worked on styling the interfaces for Daviplata and Davivienda within the Marketplace API, utilizing NgPrime and SASS to ensure a seamless and consistent user experience. This role strengthened my expertise in frontend architecture, API integration, and scalable UI design.',
    image: '',
    startDate: '2022-09',
    endDate: '2023-02',
    tools: [
      TOOLS_CONSTANTS['Angular'],
      TOOLS_CONSTANTS['Sass'],
      TOOLS_CONSTANTS['Git'],
    ],
  },
  {
    name: 'ERC Strategic Partners',
    position: 'E-learning Developer',
    description: `As an e-learning developer at ERC Strategic Partners, I created web-based learning solutions using the Adapt Learning Framework and JavaScript for BMW Latin America. Beyond development, I designed and produced assets, animations, and video content, ensuring seamless integration into virtual course materials. This role allowed me to merge technical expertise with creative storytelling, enhancing the effectiveness and engagement of digital learning experiences.`,
    image: '',
    startDate: '2022-05',
    endDate: '2023-04',
    tools: [
      TOOLS_CONSTANTS['CreativeCloud'],
      TOOLS_CONSTANTS['HTML'],
      TOOLS_CONSTANTS['CSS'],
      TOOLS_CONSTANTS['JavaScript'],
    ],
  },
  {
    name: 'Zabud Technologies',
    position: 'UX/UI Designer',
    description: `At Zabud, I worked as a UX/UI designer, refining both my design skills and aesthetic sensibility. This experience complemented my frontend development expertise by deepening my understanding of user experience and interface design. I designed over 100 mockups for educational, financial, and medical applications, focusing on creating intuitive and visually appealing user interfaces.`,
    image: '',
    startDate: '2021-07',
    endDate: '2022-04',
    tools: [TOOLS_CONSTANTS['Figma']],
  },
  {
    name: 'K@PTA',
    position: 'Multimedia Engineer',
    description: `I spent two years at Kapta, gaining insights into the automotive industry while integrating my diverse skill set into various projects. Kapta gave me the opportunity to choose tools and propose creative solutions, allowing me to grow both technically and creatively. During this time, I developed web applications with vanilla JavaScript and Unity to support in-person courses for BMW and Mini, designed and built e-learning modules for the BMW Group CMS, and maintained company websites using WordPress. I also created audiovisual and motion design content for internal use and contributed to developing the company’s brand identity.`,
    image: '',
    startDate: '2017-03',
    endDate: '2019-05',
    tools: [
      TOOLS_CONSTANTS['CreativeCloud'],
      TOOLS_CONSTANTS['HTML'],
      TOOLS_CONSTANTS['CSS'],
      TOOLS_CONSTANTS['JavaScript'],
      TOOLS_CONSTANTS['Wordpress'],
    ],
  },
  {
    name: 'Bizagi',
    position: 'Jr. Consultant',
    description: `My first job involved styling e-learning modules for Bizagi users using Adobe Captivate. While the tasks followed a consistent pattern, the experience of working inside Bizagi's offices and observing how a large organization is structured was incredibly valuable.`,
    image: '',
    startDate: '2016-09',
    endDate: '2016-12',
    tools: [TOOLS_CONSTANTS['CreativeCloud']],
  },
];
