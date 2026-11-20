// Sample content and visual defaults. API-backed pages render only real API
// results and show an explicit error/empty state instead of falling back here.

import {
    FaChartLine,
    FaCode,
    FaComments,
    FaDatabase,
    FaGraduationCap,
    FaHeart,
    FaLaptopCode,
    FaLightbulb,
    FaRocket,
    FaShoppingCart,
    FaUsers,
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

export const mockProjects = [
    {
        id: 'taskflow',
        title: 'TaskFlow',
        description:
            'A collaborative task board with drag & drop, real-time updates and team workspaces.',
        longDescription: [
            'TaskFlow started as an experiment to understand real-time collaboration from the ground up. Boards update instantly for every member of a workspace, with optimistic UI so the interface never feels behind the network.',
            'I designed the data model, the REST layer and a component system that keeps the board fast even with hundreds of cards. It is the project where I learned the most about balancing features with simplicity.',
        ],
        highlights: [
            'Drag & drop boards with optimistic updates',
            'Role-based workspaces and shareable invitations',
            'Keyboard-friendly interactions and responsive layout',
        ],
        tags: ['React', 'Node.js', 'MongoDB'],
        cover: 'from-blue-500 via-sky-500 to-cyan-400',
        icon: FaLaptopCode,
        image_url: null,
        demo_url: 'https://taskflow-demo.netlify.app',
        github_url: 'https://github.com/carrizoignacio07/taskflow',
        created_at: '2025-04-12T10:00:00.000Z',
        role: 'Full Stack Developer',
        year: '2025',
    },
    {
        id: 'devblog',
        title: 'DevBlog',
        description:
            'A minimal publishing platform for developers, with a markdown editor and tag-based browsing.',
        longDescription: [
            'DevBlog is a writing-first publishing platform. The editor supports markdown with live preview, drafts and syntax highlighting, while the reading experience stays fast and distraction-free.',
            'The front end is statically generated where possible and only fetches what the reader needs, which keeps navigation instant even on slower connections.',
        ],
        highlights: [
            'Markdown editor with live preview and drafts',
            'Tag-based browsing and full-text search',
            'Reading-first, accessible typography',
        ],
        tags: ['React', 'Tailwind CSS', 'MDX'],
        cover: 'from-sky-500 via-blue-500 to-indigo-500',
        icon: FaComments,
        image_url: null,
        demo_url: 'https://devblog-demo.netlify.app',
        github_url: 'https://github.com/carrizoignacio07/devblog',
        created_at: '2025-01-20T10:00:00.000Z',
        role: 'Frontend Developer',
        year: '2025',
    },
    {
        id: 'finance-dash',
        title: 'FinanceDash',
        description:
            'A personal finance dashboard that turns raw transactions into clear, useful insights.',
        longDescription: [
            'FinanceDash imports transactions from CSV files and turns them into budgets, trends and categories people can actually understand. The goal was to make financial data feel useful instead of overwhelming.',
            'The API handles grouping, categorization and monthly aggregates; the client renders charts that stay readable on a phone.',
        ],
        highlights: [
            'CSV import with automatic categorization',
            'Monthly budgets and interactive charts',
            'Responsive charts with accessible color contrast',
        ],
        tags: ['React', 'Express', 'PostgreSQL'],
        cover: 'from-cyan-500 via-sky-500 to-blue-600',
        icon: FaChartLine,
        image_url: null,
        demo_url: 'https://financedash-demo.netlify.app',
        github_url: 'https://github.com/carrizoignacio07/finance-dash',
        created_at: '2024-10-05T10:00:00.000Z',
        role: 'Full Stack Developer',
        year: '2024',
    },
    {
        id: 'fittrack',
        title: 'FitTrack',
        description:
            'A workout tracker that helps you keep a consistent routine with simple, motivating stats.',
        longDescription: [
            'FitTrack focuses on consistency rather than complexity. It records workouts, calculates weekly streaks and shows progress with a few honest, easy-to-read numbers.',
            'It was built as a mobile-first progressive web app, so it works offline and can be installed on the home screen.',
        ],
        highlights: [
            'Offline-first PWA with local synchronization',
            'Streaks and weekly progress at a glance',
            'Mobile-first interface with thumb-friendly controls',
        ],
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        cover: 'from-indigo-500 via-blue-500 to-sky-400',
        icon: FaRocket,
        image_url: null,
        demo_url: 'https://fittrack-demo.netlify.app',
        github_url: 'https://github.com/carrizoignacio07/fittrack',
        created_at: '2024-07-18T10:00:00.000Z',
        role: 'Frontend Developer',
        year: '2024',
    },
    {
        id: 'marketplace',
        title: 'Mini Marketplace',
        description:
            'A small e-commerce experience with catalog filtering, cart management and a checkout flow.',
        longDescription: [
            'A compact marketplace built to explore real-world state management: filters that compose, a persistent cart and an order flow that survives a page refresh.',
            'The product pages are server-rendered for SEO, while the cart and checkout interactions happen instantly on the client.',
        ],
        highlights: [
            'Composable filters, search and sorting',
            'Persistent cart with stock validation',
            'Clean checkout flow with clear error states',
        ],
        tags: ['Next.js', 'PostgreSQL', 'Stripe'],
        cover: 'from-cyan-500 via-blue-500 to-slate-700',
        icon: FaShoppingCart,
        image_url: null,
        demo_url: 'https://mini-marketplace-demo.netlify.app',
        github_url: 'https://github.com/carrizoignacio07/mini-marketplace',
        created_at: '2024-03-02T10:00:00.000Z',
        role: 'Full Stack Developer',
        year: '2024',
    },
    {
        id: 'juani-dev-portfolio',
        title: 'JuaniDev Portfolio',
        description:
            'The site you are browsing: a fast, responsive portfolio backed by a small REST API.',
        longDescription: [
            'This portfolio is my living playground. Projects, technologies and acknowledgements are served by an Express API over Supabase, so I can update content without touching the front end.',
            'The interface is built with React, Vite and Tailwind CSS, with a strong focus on responsive layouts, accessible interactions and a consistent visual language.',
        ],
        highlights: [
            'Content-driven pages powered by an Express + Supabase API',
            'Reusable design system with responsive components',
            'Graceful mock fallbacks when the API is unavailable',
        ],
        tags: ['React', 'Vite', 'Tailwind CSS'],
        cover: 'from-slate-700 via-blue-600 to-cyan-500',
        icon: FaLaptopCode,
        image_url: null,
        demo_url: 'https://juanidev-portfolio.vercel.app',
        github_url: 'https://github.com/carrizoignacio07/juanidev-portfolio',
        created_at: '2023-11-11T10:00:00.000Z',
        role: 'Full Stack Developer',
        year: '2023',
    },
];

export const mockTechnologies = [
    {
        id: 1,
        name: 'React',
        category: 'Frontend',
        icon: null,
        Icon: SiReact,
        color: 'text-sky-500',
        level: 'Advanced',
        levelValue: 92,
        years: '4 years',
    },
    {
        id: 2,
        name: 'JavaScript',
        category: 'Frontend',
        icon: null,
        Icon: SiJavascript,
        color: 'text-yellow-500',
        level: 'Advanced',
        levelValue: 90,
        years: '5 years',
    },
    {
        id: 3,
        name: 'TypeScript',
        category: 'Frontend',
        icon: null,
        Icon: SiTypescript,
        color: 'text-blue-600',
        level: 'Intermediate',
        levelValue: 78,
        years: '2 years',
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: null,
        Icon: SiTailwindcss,
        color: 'text-cyan-500',
        level: 'Advanced',
        levelValue: 90,
        years: '3 years',
    },
    {
        id: 5,
        name: 'Node.js',
        category: 'Backend',
        icon: null,
        Icon: SiNodedotjs,
        color: 'text-emerald-600',
        level: 'Intermediate',
        levelValue: 80,
        years: '3 years',
    },
    {
        id: 6,
        name: 'Express',
        category: 'Backend',
        icon: null,
        Icon: SiExpress,
        color: 'text-slate-700',
        level: 'Intermediate',
        levelValue: 82,
        years: '3 years',
    },
    {
        id: 7,
        name: 'PostgreSQL',
        category: 'Databases',
        icon: null,
        Icon: SiPostgresql,
        color: 'text-blue-500',
        level: 'Intermediate',
        levelValue: 76,
        years: '2 years',
    },
    {
        id: 8,
        name: 'MongoDB',
        category: 'Databases',
        icon: null,
        Icon: SiMongodb,
        color: 'text-green-600',
        level: 'Intermediate',
        levelValue: 78,
        years: '3 years',
    },
    {
        id: 9,
        name: 'Git',
        category: 'Tools',
        icon: null,
        Icon: SiGit,
        color: 'text-orange-500',
        level: 'Advanced',
        levelValue: 88,
        years: '5 years',
    },
    {
        id: 10,
        name: 'GitHub',
        category: 'Tools',
        icon: null,
        Icon: SiGithub,
        color: 'text-slate-800',
        level: 'Advanced',
        levelValue: 90,
        years: '5 years',
    },
    {
        id: 11,
        name: 'Vite',
        category: 'Tools',
        icon: null,
        Icon: SiVite,
        color: 'text-violet-500',
        level: 'Advanced',
        levelValue: 85,
        years: '3 years',
    },
    {
        id: 12,
        name: 'Figma',
        category: 'Design',
        icon: null,
        Icon: SiFigma,
        color: 'text-pink-500',
        level: 'Intermediate',
        levelValue: 70,
        years: '2 years',
    },
];

export const mockThanks = [
    {
        id: 1,
        creator: 'Midudev',
        about: 'For making frontend development approachable and fun for thousands of us.',
        img: null,
        avatar: 'from-blue-500 to-cyan-400',
        github_url: 'https://github.com/midudev',
        about_url: 'https://www.youtube.com/@midudev',
        courses: [
            {
                id: 1,
                title: 'React from scratch',
                url: 'https://www.youtube.com/@midudev',
            },
        ],
    },
    {
        id: 2,
        creator: 'Fernando Herrera',
        about: 'For clear, thoughtful explanations that made backend concepts finally click.',
        img: null,
        avatar: 'from-sky-500 to-blue-600',
        github_url: 'https://github.com/fherrera12',
        about_url: 'https://www.youtube.com/@fernando.herrera.archive',
        courses: [
            {
                id: 2,
                title: 'Node.js fundamentals',
                url: 'https://www.youtube.com/@fernando.herrera.archive',
            },
        ],
    },
    {
        id: 3,
        creator: 'Juan David Naranjo',
        about: 'For teaching the value of fundamentals, structure and writing code that lasts.',
        img: null,
        avatar: 'from-cyan-500 to-sky-600',
        github_url: 'https://github.com/juandavidnaranjo',
        about_url: 'https://www.youtube.com/@JuanDavidNaranjo',
        courses: [
            {
                id: 3,
                title: 'Clean architecture',
                url: 'https://www.youtube.com/@JuanDavidNaranjo',
            },
        ],
    },
    {
        id: 4,
        creator: 'The Odin Project',
        about: 'For an open, practical curriculum that shaped how I learn and build on my own.',
        img: null,
        avatar: 'from-indigo-500 via-blue-500 to-sky-500',
        github_url: 'https://github.com/TheOdinProject',
        about_url: 'https://www.theodinproject.com',
        courses: [
            {
                id: 4,
                title: 'Full Stack JavaScript',
                url: 'https://www.theodinproject.com',
            },
        ],
    },
    {
        id: 5,
        creator: 'CSS-Tricks',
        about: 'For endless articles that turn tricky CSS details into something understandable.',
        img: null,
        avatar: 'from-slate-700 via-blue-600 to-cyan-500',
        github_url: 'https://github.com/CSS-Tricks',
        about_url: 'https://css-tricks.com',
        courses: [],
    },
];

export const aboutContent = {
    lead: 'I am Ignacio Carrizo, a full stack developer from Córdoba, Argentina. I like turning vague ideas into products that feel simple, fast and a little bit delightful.',
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
};

export const contactContent = {
    email: 'hello@juani.dev',
    location: 'Córdoba, Argentina · Remote',
    availability: 'Open to freelance work and new opportunities',
    responseTime: 'I usually reply within 24 hours',
    socials: [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ignacio-carrizo/',
            icon: FaUsers,
        },
        {
            label: 'GitHub',
            href: 'https://github.com/carrizoignacio07',
            icon: SiGithub,
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/carrizoignacio1/',
            icon: FaHeart,
        },
        {
            label: 'YouTube',
            href: 'https://www.youtube.com',
            icon: FaRocket,
        },
    ],
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
};

const sameId = (a, b) => String(a ?? '') === String(b ?? '');

export const withProjectVisuals = (project = {}) => {
    const mock = mockProjects.find(
        (item) => sameId(item.id, project.id) || item.title === project.title
    );

    return {
        ...mock,
        ...project,
        cover:
            project.cover ||
            mock?.cover ||
            'from-blue-500 via-sky-500 to-cyan-400',
        icon: project.icon || mock?.icon || FaLaptopCode,
        image_url: project.image_url || null,
        tags: project.tags?.length > 0 ? project.tags : (mock?.tags ?? []),
        github_url:
            project.github_url ?? project.urlGithub ?? mock?.github_url ?? '',
        demo_url: project.demo_url ?? mock?.demo_url ?? '',
        longDescription:
            project.longDescription?.length > 0
                ? project.longDescription
                : (mock?.longDescription ?? [project.description]),
        highlights:
            project.highlights?.length > 0
                ? project.highlights
                : (mock?.highlights ?? []),
        role: project.role ?? mock?.role ?? 'Full Stack Developer',
        year: project.year ?? mock?.year ?? '',
    };
};

export const withTechVisuals = (tech = {}) => {
    const mock = mockTechnologies.find(
        (item) =>
            sameId(item.id, tech.id) ||
            item.name?.toLowerCase() === String(tech.name ?? '').toLowerCase()
    );

    return {
        ...mock,
        ...tech,
        name: tech.name ?? mock?.name ?? 'Technology',
        category: tech.category ?? mock?.category ?? 'Tools',
        icon: tech.icon ?? null,
        Icon: tech.Icon ?? mock?.Icon ?? null,
        color: mock?.color ?? 'text-blue-600',
        level: mock?.level ?? '',
        levelValue: mock?.levelValue ?? 0,
        years: mock?.years ?? '',
    };
};

export const withThanksVisuals = (thank = {}) => ({
    ...thank,
    avatar: thank.avatar || 'from-blue-500 to-cyan-400',
    img: thank.img ?? null,
    courses: Array.isArray(thank.courses) ? thank.courses : [],
});
