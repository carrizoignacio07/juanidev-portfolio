// Mock content for the home page.
// Replace these values with real data (or an API call) when the backend is ready.

import {
    FaBriefcase,
    FaCode,
    FaComments,
    FaDatabase,
    FaHandshake,
    FaLaptopCode,
    FaPalette,
    FaRocket,
} from 'react-icons/fa';
import {
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

export const heroContent = {
    badge: 'Available for freelance work',
    greeting: "Hi, I'm",
    name: 'Juani',
    headline: 'I build web experiences that feel effortless.',
    description:
        'Full Stack Developer who turns complex ideas into simple, fast and beautiful products. I care about clean code, thoughtful details and good coffee.',
    location: 'Córdoba, Argentina',
    availability: 'Open to new opportunities',
    primaryCta: { label: 'View my projects', to: '/projects' },
    secondaryCta: { label: 'Get in touch', to: '/contact' },
};

export const stats = [
    { icon: FaBriefcase, value: '3+', label: 'Years of experience' },
    { icon: FaRocket, value: '20+', label: 'Projects shipped' },
    { icon: FaCode, value: '15+', label: 'Technologies' },
    { icon: FaHandshake, value: '10+', label: 'Happy clients' },
];

export const services = [
    {
        icon: FaLaptopCode,
        title: 'Frontend Development',
        description:
            'Responsive, accessible interfaces built with React and modern CSS. From pixel-perfect layouts to smooth interactions.',
        tags: ['React', 'Tailwind', 'TypeScript'],
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        icon: FaDatabase,
        title: 'Backend & APIs',
        description:
            'Solid APIs and data models that scale. Authentication, integrations and performance are part of the package.',
        tags: ['Node.js', 'Express', 'MongoDB'],
        gradient: 'from-sky-500 to-blue-600',
    },
    {
        icon: FaPalette,
        title: 'UI & Design',
        description:
            'Clean, consistent design systems with attention to detail. I turn sketches and ideas into usable products.',
        tags: ['Figma', 'Design systems', 'UX'],
        gradient: 'from-cyan-500 to-sky-600',
    },
];

export const featuredProjects = [
    {
        id: 'taskflow',
        title: 'TaskFlow',
        description:
            'A collaborative task board with drag & drop, real-time updates and team workspaces.',
        tags: ['React', 'Node.js', 'MongoDB'],
        icon: FaLaptopCode,
        cover: 'from-blue-500 via-sky-500 to-cyan-400',
        demoUrl: 'https://taskflow-demo.netlify.app',
        githubUrl: 'https://github.com/carrizoignacio07/taskflow',
    },
    {
        id: 'devblog',
        title: 'DevBlog',
        description:
            'A minimal publishing platform for developers, with a markdown editor and tag-based browsing.',
        tags: ['React', 'Tailwind', 'MDX'],
        icon: FaComments,
        cover: 'from-sky-500 via-blue-500 to-indigo-500',
        demoUrl: 'https://devblog-demo.netlify.app',
        githubUrl: 'https://github.com/carrizoignacio07/devblog',
    },
    {
        id: 'finance-dash',
        title: 'FinanceDash',
        description:
            'A personal finance dashboard that turns raw transactions into clear, useful insights.',
        tags: ['React', 'Express', 'PostgreSQL'],
        icon: FaDatabase,
        cover: 'from-cyan-500 via-sky-500 to-blue-600',
        demoUrl: 'https://financedash-demo.netlify.app',
        githubUrl: 'https://github.com/carrizoignacio07/finance-dash',
    },
];

export const techStack = [
    { name: 'React', icon: SiReact, color: 'text-sky-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Vite', icon: SiVite, color: 'text-violet-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-600' },
    { name: 'Express', icon: SiExpress, color: 'text-slate-700' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-slate-800' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
];

export const contactEmail = 'hello@juani.dev';
