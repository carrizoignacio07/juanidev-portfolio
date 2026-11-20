import { Link } from 'react-router-dom';

import {
    FaArrowDown,
    FaArrowRight,
    FaCheckCircle,
    FaEnvelope,
    FaExternalLinkAlt,
    FaGithub,
    FaMapMarkerAlt,
    FaRocket,
} from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

import {
    contactEmail,
    featuredProjects,
    heroContent,
    services,
    stats,
    techStack,
} from '../data/homeMock.js';

const SectionHeading = ({ eyebrow, title, subtitle, centered = false }) => {
    return (
        <div
            className={`flex flex-col gap-3 ${
                centered ? 'items-center text-center' : 'items-start'
            }`}
        >
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                {eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 [overflow-wrap:anywhere] sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`max-w-2xl text-base leading-relaxed text-slate-600 ${
                        centered ? 'mx-auto' : ''
                    }`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-white px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        {heroContent.badge}
                    </span>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-slate-900 [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
                        <span className="block">
                            {heroContent.greeting}{' '}
                            <span className="text-gradient inline-block">
                                {heroContent.name} 👋
                            </span>
                        </span>
                        <span className="block">{heroContent.headline}</span>
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                        {heroContent.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            to={heroContent.primaryCta.to}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
                        >
                            {heroContent.primaryCta.label}
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                        <Link
                            to={heroContent.secondaryCta.to}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
                        >
                            <FaEnvelope aria-hidden="true" />
                            {heroContent.secondaryCta.label}
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                            <FaMapMarkerAlt
                                className="text-blue-500"
                                aria-hidden="true"
                            />
                            {heroContent.location}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="inline-flex items-center gap-1.5">
                            <FaCheckCircle
                                className="text-emerald-500"
                                aria-hidden="true"
                            />
                            {heroContent.availability}
                        </span>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-300/40 to-cyan-200/40 blur-2xl" />
                    <div className="relative rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur">
                        <div className="flex items-center gap-2 border-b border-slate-100 px-2 pb-4">
                            <span className="h-3 w-3 rounded-full bg-red-300" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-300" />
                            <span className="ml-3 font-mono text-xs text-slate-400">
                                developer.jsx
                            </span>
                        </div>

                        <pre className="mt-4 max-w-full overflow-x-auto whitespace-pre rounded-xl bg-slate-900 p-4 text-left font-mono text-[11px] leading-6 text-slate-200 sm:p-5 sm:text-sm">
                            <code>
                                <span className="text-blue-300">const</span>{' '}
                                developer = {'{'}
                                {'\n  '}name:{' '}
                                <span className="text-emerald-300">
                                    'Juani'
                                </span>
                                ,{'\n  '}role:{' '}
                                <span className="text-rose-300">
                                    'Full Stack Dev'
                                </span>
                                ,{'\n  '}stack: [
                                <span className="text-emerald-300">
                                    'React'
                                </span>
                                ,{' '}
                                <span className="text-emerald-300">'Node'</span>
                                ],
                                {'\n  '}available:{' '}
                                <span className="text-amber-300">true</span>
                                {'\n'}
                                {'}'};{'\n\n'}
                                <span className="text-slate-500">
                                    // let's build something 🚀
                                </span>
                            </code>
                        </pre>

                        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-blue-50 p-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    Juani Dev
                                </p>
                                <p className="text-xs text-slate-500">
                                    Full Stack Developer · Remote
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -left-6 top-1/4 hidden animate-float items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-lg sm:flex">
                        <SiReact className="text-sky-500" aria-hidden="true" />
                        React
                    </div>
                    <div className="absolute -right-4 bottom-16 hidden animate-float-delayed items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-lg sm:flex">
                        <SiTailwindcss
                            className="text-cyan-500"
                            aria-hidden="true"
                        />
                        Tailwind
                    </div>
                </div>
            </div>

            <a
                href="#stats"
                aria-label="Scroll to stats"
                className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-blue-400 transition hover:text-blue-600 sm:block"
            >
                <FaArrowDown aria-hidden="true" />
            </a>
        </section>
    );
};

const Stats = () => {
    return (
        <section
            id="stats"
            aria-label="Quick stats"
            className="grid w-full grid-cols-2 gap-3 rounded-3xl border border-blue-100 bg-white/70 p-4 shadow-sm sm:grid-cols-4 sm:gap-4 sm:p-8"
        >
            {stats.map(({ icon: Icon, value, label }) => (
                <div
                    key={label}
                    className="flex flex-col items-center gap-1 text-center"
                >
                    <Icon
                        className="mb-1 text-2xl text-blue-500"
                        aria-hidden="true"
                    />
                    <span className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        {value}
                    </span>
                    <span className="text-xs text-slate-500 sm:text-sm">
                        {label}
                    </span>
                </div>
            ))}
        </section>
    );
};

const ServiceCard = ({ icon: Icon, title, description, tags, gradient }) => {
    return (
        <article className="group flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6">
            <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-xl text-white shadow-md`}
            >
                <Icon aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">
                {description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                    <li
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </article>
    );
};

const Services = () => {
    return (
        <section className="flex w-full flex-col gap-8">
            <SectionHeading
                eyebrow="What I do"
                title="Turning ideas into reliable products"
                subtitle="A little bit of design, a lot of engineering, and a genuine interest in making things work well for people."
            />
            <div className="grid gap-6 md:grid-cols-3">
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({
    title,
    description,
    tags,
    icon: Icon,
    cover,
    demoUrl,
    githubUrl,
}) => {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
            <div
                className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${cover} sm:h-40`}
            >
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                <Icon
                    className="relative text-5xl text-white/90 transition duration-300 group-hover:scale-110"
                    aria-hidden="true"
                />
                <span className="absolute top-4 right-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-blue-700">
                    Featured
                </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 sm:gap-5">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-target gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                        <FaExternalLinkAlt aria-hidden="true" /> Demo
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-target gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
                    >
                        <FaGithub aria-hidden="true" /> Code
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <section className="flex w-full flex-col gap-8">
            <SectionHeading
                eyebrow="Featured work"
                title="A few things I've built"
                subtitle="Some recent projects that show how I think about structure, performance and the small details."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50"
                >
                    See all projects <FaArrowRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
};

const TechStack = () => {
    return (
        <section className="flex w-full flex-col gap-8 rounded-3xl border border-blue-100 bg-white/70 p-5 sm:p-10">
            <SectionHeading
                eyebrow="Toolbox"
                title="Technologies I work with"
                subtitle="The tools I reach for most often, depending on what the project needs."
                centered
            />
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {techStack.map(({ name, icon: Icon, color }) => (
                    <li key={name}>
                        <span className="tap-target gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">
                            <Icon
                                className={`text-xl ${color}`}
                                aria-hidden="true"
                            />
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const CallToAction = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-6 py-14 text-center text-white sm:px-10 lg:py-16">
            <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-cyan-200/20 blur-2xl" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                <FaRocket
                    className="text-4xl text-white/80"
                    aria-hidden="true"
                />
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Let's build something together
                </h2>
                <p className="text-blue-50">
                    Have a project in mind or just want to say hi? My inbox is
                    always open.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/contact"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                        Start a conversation
                    </Link>
                    <a
                        href={`mailto:${contactEmail}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        <FaEnvelope aria-hidden="true" /> Say hello
                    </a>
                </div>
            </div>
        </section>
    );
};

export const HomePage = () => {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 lg:gap-20 lg:px-12 lg:py-14">
            <Hero />
            <Stats />
            <Services />
            <Projects />
            <TechStack />
            <CallToAction />
        </div>
    );
};
