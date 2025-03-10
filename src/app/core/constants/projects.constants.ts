import { Project, ProjectStatus } from '../models/project.model';
import { TOOLS_CONSTANTS } from './tools.constants';

export const PROJECTS_CONSTANTS: Project[] = [
  {
    name: 'CrisHood.com',
    description:
      'CrisHood.com is my e-commerce platform designed for selling beats, built using WordPress to ensure a seamless shopping experience. Beyond development, I crafted the brand identity and wrote compelling copy to connect with my audience. The platform also serves as a space for music production, supporting new talents in their creative journey. Additionally, I manage cPanel for deployments and file administration, ensuring smooth performance and scalability.',
    status: ProjectStatus.ACTIVE,
    startDate: '2019-08',
    tools: [
      TOOLS_CONSTANTS['Wordpress'],
      TOOLS_CONSTANTS['Ableton'],
      TOOLS_CONSTANTS['CreativeCloud'],
      TOOLS_CONSTANTS['Figma'],
      TOOLS_CONSTANTS['Obsidian'],
    ],
    projectUrl: 'https://crishood.com',
  },
  {
    name: 'CrisHood Youtube Channel',
    description:
      'On my YouTube channel, I explore the creative possibilities of Ableton through tutorials and storytelling, making music production both accessible and inspiring. I write, record, and edit each video, crafting engaging content that goes beyond technical skills to spark creativity. My goal is to share ideas, break down complex concepts, and help producers find their unique sound while exploring the art of making music.',
    status: ProjectStatus.ACTIVE,
    startDate: '2017-06',
    tools: [
      TOOLS_CONSTANTS['Ableton'],
      TOOLS_CONSTANTS['CreativeCloud'],
      TOOLS_CONSTANTS['Figma'],
      TOOLS_CONSTANTS['Obsidian'],
    ],
    projectUrl: 'https://www.youtube.com/@CrisHood',
  },
  {
    name: 'Limonada Notes',
    description:
      'Limonada Notes is my personal blog on Substack, where I share insights on creativity, audio production, programming, and the art of building ideas. It’s a space to explore connections between technology and artistic expression, blending technical knowledge with a fresh, thoughtful perspective. Through writing, I aim to spark curiosity, inspire experimentation, and document my journey as a creator.',
    status: ProjectStatus.ACTIVE,
    startDate: '2025-02',
    tools: [TOOLS_CONSTANTS['Obsidian']],
    projectUrl: 'https://limonadanotes.substack.com/',
  },
  {
    name: 'Limonada Sounds',
    description:
      'Limonada Sounds is my upcoming e-commerce platform dedicated to providing high-quality sounds for music producers. Designed to replace CrisHood.com, it will offer an extensive collection of sample packs, drum kits, MIDI packs, Ableton presets, and production tools. Beyond selling digital products, Limonada Sounds is built to inspire creativity, giving producers the right sounds to shape their unique musical identity.',
    status: ProjectStatus.IN_DEVELOPMENT,
    startDate: '2024-01',
    tools: [
      TOOLS_CONSTANTS['NextJS'],
      TOOLS_CONSTANTS['Django'],
      TOOLS_CONSTANTS['Figma'],
    ],
    projectUrl: 'Coming soon',
  },
  {
    name: 'PDF Folder to Markdowns (Obsidian Plugin)',
    description: `Convert a folder of PDFs into a folder of Markdown files with embedded PDFs.
This plugin is useful for users who want to migrate their PDF notes from different apps (e.g., Boox) or organize their reference materials inside Obsidian.`,
    status: ProjectStatus.IN_REVIEW,
    startDate: '2025-03',
    tools: [TOOLS_CONSTANTS['Obsidian'], TOOLS_CONSTANTS['Typescript']],
    projectUrl: 'https://github.com/crishood/pdf-folder-to-markdowns',
  },
  {
    name: 'Trello Clone',
    description:
      'As part of the Make It Real bootcamp, I collaborated on the development of a Trello Clone, applying SCRUM methodology and Gitflow for efficient project management. I contributed to scripting interactive components with React to enhance functionality and user experience. On the backend, I implemented Node.js, Express, MongoDB, and Mongoose to ensure a scalable and well-structured system architecture.',
    status: ProjectStatus.ARCHIVED,
    startDate: '2025-03',
    tools: [
      TOOLS_CONSTANTS['Sass'],
      TOOLS_CONSTANTS['Figma'],
      TOOLS_CONSTANTS['HTML'],
      TOOLS_CONSTANTS['CSS'],
      TOOLS_CONSTANTS['JavaScript'],
    ],
    projectUrl: 'https://github.com/crishood/trello-clone-backend',
  },
  {
    name: 'Dímelo',
    description:
      'As part of the Make It Real bootcamp, I developed a platform designed to connect beatmakers and songwriters in the same city to collaborate on music. The frontend was built using React, Redux Toolkit, and Mantine, ensuring a smooth and dynamic user experience. The backend, powered by Node.js, Express, and MongoDB, provided a solid foundation for user interactions and data management. The project was deployed using Netlify for the frontend and Heroku for the backend, ensuring accessibility and scalability.',
    status: ProjectStatus.ARCHIVED,
    startDate: '2025-03',
    tools: [
      TOOLS_CONSTANTS['Sass'],
      TOOLS_CONSTANTS['Figma'],
      TOOLS_CONSTANTS['HTML'],
      TOOLS_CONSTANTS['CSS'],
      TOOLS_CONSTANTS['JavaScript'],
    ],
    projectUrl: 'https://dimelo-ma-g.netlify.app/',
  },
];
