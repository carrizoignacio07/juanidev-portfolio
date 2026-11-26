// Editorial content for the static pages.
// This is versioned copy, not mock data and not API-backed collections.

import {
    FaBriefcase,
    FaCode,
    FaComments,
    FaDatabase,
    FaFacebook,
    FaGithub,
    FaHandshake,
    FaInstagram,
    FaLaptopCode,
    FaLightbulb,
    FaLinkedin,
    FaPalette,
    FaRocket,
    FaUsers,
} from 'react-icons/fa';
import {
    SiExpress,
    SiFigma,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiPostgresql,
    SiGithub,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

export const brand = {
    name: 'Juani',
    highlight: 'Dev',
    initials: 'JD',
    role: 'Full Stack & Mobile Developer',
    tagline:
        'Full Stack & Mobile Developer turning ideas into simple, fast and beautiful web experiences.',
};

export const socials = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ignacio-carrizo/',
        icon: FaLinkedin,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/carrizoignacio07',
        icon: FaGithub,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/carrizoignacio1/',
        icon: FaInstagram,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/ignacio.carrizo.798',
        icon: FaFacebook,
    },
];

export const heroContent = {
    badge: 'Available for full-time remote work',
    greeting: "Hi, I'm",
    name: 'Juani',
    headline: 'I build web experiences that feel effortless.',
    description:
        'Full Stack & Mobile Developer who turns complex ideas into simple, fast and beautiful products. I care about clean code, thoughtful details and good coffee.',
    location: 'Córdoba, Argentina',
    availability: 'Open to full-time remote opportunities',
    primaryCta: { label: 'View my projects', to: '/projects' },
    secondaryCta: { label: 'Get in touch', to: '/contact' },
    code: {
        name: 'Juani',
        role: 'Full Stack & Mobile Dev',
        stack: ['React', 'Node'],
        available: true,
        comment: "let's build something 🚀",
    },
};

export const homeCopy = {
    services: {
        eyebrow: 'What I do',
        title: 'Turning ideas into reliable products',
        subtitle:
            'A little bit of design, a lot of engineering, and a genuine interest in making things work well for people.',
    },
    projects: {
        eyebrow: 'Featured work',
        title: "A few things I've built",
        subtitle:
            'Some recent projects that show how I think about structure, performance and the small details.',
        seeAll: 'See all projects',
    },
    tech: {
        eyebrow: 'Toolbox',
        title: 'Technologies I work with',
        subtitle:
            'The tools I reach for most often, depending on what the project needs.',
    },
    cta: {
        title: "Let's build something together",
        description:
            'Have a project in mind or just want to say hi? My inbox is always open.',
        primary: 'Start a conversation',
        secondary: 'Say hello',
    },
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

export const contactEmail = 'carrizoignacio96@gmail.com';

export const aboutContent = {
    fullName: 'Juan Ignacio Carrizo',
    lead: 'I am Juan Ignacio Carrizo, a Full Stack & Mobile Developer from Córdoba, Argentina. I like turning vague ideas into products that feel simple, fast and a little bit delightful.',
    paragraphs: [
        'My path into development started with curiosity about how websites were built and quickly turned into a daily habit of learning, breaking things and building them again. Today I work across the stack, with special interest in the space where good design meets solid engineering.',
        'I care about the details that often go unnoticed: a keyboard-friendly interaction, a clear error message, an interface that stays usable on a small screen. Those details are what turn a working project into a product people enjoy using.',
        'When I am not coding you will probably find me exploring a new tool, reading about design systems or looking for a good coffee to keep the momentum going.',
    ],
    facts: [
        { label: 'Based in', value: 'Córdoba, Argentina' },
        { label: 'Working mode', value: 'Remote & freelance' },
        { label: 'Focus', value: 'React + Node.js' },
        { label: 'Learning', value: 'Always something new' },
    ],
    timeline: [
        {
            year: '2023 — Now',
            role: 'Full Stack Developer',
            place: 'Freelance · Remote',
            description:
                'Building web applications for clients and personal projects, from the first wireframe to deployment and maintenance.',
        },
        {
            year: '2022 — 2023',
            role: 'Frontend Development',
            place: 'Self-directed learning',
            description:
                'Deep dive into React, modern CSS and accessibility through hands-on projects and open courses.',
        },
        {
            year: '2021 — 2022',
            role: 'First steps in code',
            place: 'The Odin Project',
            description:
                'Learned the fundamentals of HTML, CSS, JavaScript and Git while shipping small experiments.',
        },
    ],
    values: [
        {
            icon: FaCode,
            title: 'Craft over shortcuts',
            description:
                'Readable code and thoughtful structure are an investment in every future change.',
        },
        {
            icon: FaUsers,
            title: 'Build for people',
            description:
                'Interfaces should be clear, accessible and kind to everyone who uses them.',
        },
        {
            icon: FaLightbulb,
            title: 'Curiosity first',
            description:
                'The best work comes from asking better questions and enjoying the process.',
        },
    ],
    intro: {
        eyebrow: 'About me',
        title: 'A developer who builds with purpose.',
    },
    story: {
        eyebrow: 'My story',
        title: 'A bit of context',
    },
    journey: {
        eyebrow: 'Journey',
        title: 'How I got here',
        subtitle:
            'A short timeline of the steps that shaped the way I work today.',
    },
    valuesHeading: {
        eyebrow: 'What matters',
        title: 'The values behind the code',
    },
    cta: {
        title: 'Have something in mind?',
        description:
            'I am always happy to talk about new ideas, projects and collaborations.',
        label: 'Work with me',
    },
    note: 'Clean code, clear intent.',
    code: {
        name: 'Juani',
        focus: ['React', 'Node.js'],
        coffee: true,
    },
};

export const contactContent = {
    email: contactEmail,
    location: 'Córdoba, Argentina · Remote',
    availability: 'Open to full-time remote opportunities',
    responseTime: 'I usually reply within 2 hours',
    socials,
    faqs: [
        {
            question: 'What kind of work do you take on?',
            answer: 'Frontend and full stack web projects, from a landing page to a complete application.',
        },
        {
            question: 'Can we work remotely?',
            answer: 'Yes. I am based in Córdoba and used to collaborating with teams across time zones.',
        },
    ],
    intro: {
        eyebrow: 'Contact',
        title: "Let's start a conversation.",
        description:
            'Have a project in mind, a question, or just want to say hi? Drop me a message and I will get back to you.',
    },
    reach: {
        title: 'I am easy to reach',
        description:
            'Whether it is a project, a job offer or a quick question, my inbox is always open.',
    },
    goodToKnow: 'Good to know',
    labels: {
        email: 'Email',
        location: 'Location',
        responseTime: 'Response time',
    },
};
