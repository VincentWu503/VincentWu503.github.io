import type { Project } from '../types';

export const Projects: Project[] = [
  {
    title: 'Online Food Ordering Web Applications',
    description:
      'Online food ordering website dedicated to one of SMEs near Untar (Sahera Pak Kirno). Users can see menu list, stock availability, order status, order history, and make an order via website.',
    contributions: [
      'Integrated Express.js backend services with the frontend.',
      'Designed required API and general software design for the websites.',
      'Developed core authentication system, such as Google sign in, account sign in and creation, reset password, and OTP by email.',
      'Developed or refined core features for the website, such as order and cart logic, and more.',
      'Deployed backend services and Next.js websites to production environment via VPS and Vercel respectively.',
    ],
    techstacks: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    imagePaths: ['images/project1.png'],
    sourceCodeLink:
      'https://github.com/stars/VincentWu503/lists/capstone-project',
  },
  {
    title: 'Anterin',
    description:
      'A Flutter based mobile ride-hailing app replicating popular online user-facing ride hailing services, such as Gojek and Grab.',
    contributions: [
      'Developed the home screen and screens for e-wallet feature.',
      'Implementing centralized screen navigation system using Go Router library.',
      'Contributed on initial interface design.',
    ],
    techstacks: ['Flutter', 'Dart'],
    imagePaths: ['images/project2.png'],
    sourceCodeLink: 'https://github.com/DanielKA014/AnterIn',
  },
  {
    title: 'Ayam Bakar Ojolali Website',
    description:
      'Online menu catalog/CRUD website for to one of SMEs near Untar (Ayam Bakar Ojolali Tomang). Users can see menu information and leave a review there.',
    contributions: [
      'Developed every backend features for the website interactivity.',
      'Integrated backend logic with Next.js website.',
      "Collaborated on frontend development by building some web pages and refining the site's functionalities.",
    ],
    techstacks: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    imagePaths: ['images/project3.png'],
    sourceCodeLink: 'https://github.com/DanielKA014/uas-fe-frontend',
  },
];
