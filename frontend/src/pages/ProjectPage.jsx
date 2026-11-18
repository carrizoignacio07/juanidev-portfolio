import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    FaArrowRight,
    FaCheckCircle,
    FaExternalLinkAlt,
    FaGithub,
    FaLayerGroup,
} from 'react-icons/fa';

import { Card } from '../components/Card.jsx';
import { Loader } from '../components/Loader.jsx';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { mockProjects, withProjectVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const ProjectPage = () => {
    const { id } = useParams();
    const [heroImageFailed, setHeroImageFailed] = useState(false);

    const { data, loading } = useApiData(
        `projects/${encodeURIComponent(id)}`,
        []
    );

    const project = data[0]
        ? withProjectVisuals(data[0])
        : mockProjects.find((item) => String(item.id) === String(id));

    useEffect(() => {
        setHeroImageFailed(false);
    }, [id]);

    if (loading) {
        return (
            <div className="mx-auto flex w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
                <Loader label="Loading project…" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-12">
                <PageIntro
                    eyebrow="404 · Project"
                    title="This project could not be found."
                    description="It may have been moved or renamed. Take a look at the full project list instead."
                    breadcrumb={[
                        { label: 'Home', to: '/' },
                        { label: 'Projects', to: '/projects' },
                        { label: 'Not found' },
                    ]}
                />
                <Link to="/projects" className="btn-primary w-fit">
                    Browse all projects <FaArrowRight aria-hidden="true" />
                </Link>
            </div>
        );
    }

    const Icon = project.icon;
    const moreProjects = mockProjects
        .filter((item) => String(item.id) !== String(project.id))
        .slice(0, 3)
        .map((item) => withProjectVisuals(item));

    const showHeroImage = Boolean(project.image_url) && !heroImageFailed;

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow={project.role}
                title={project.title}
                description={project.description}
                breadcrumb={[
                    { label: 'Home', to: '/' },
                    { label: 'Projects', to: '/projects' },
                    { label: project.title },
                ]}
            >
                <ul className="flex flex-wrap gap-2 pt-1">
                    {(project.tags ?? []).map((tag) => (
                        <li key={tag} className="chip">
                            {tag}
                        </li>
                    ))}
                </ul>
            </PageIntro>

            <div
                className={`relative flex min-h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.cover}`}
            >
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
                {showHeroImage ? (
                    <img
                        src={project.image_url}
                        alt={project.title}
                        onError={() => setHeroImageFailed(true)}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : Icon ? (
                    <Icon
                        className="relative text-7xl text-white/90 sm:text-8xl"
                        aria-hidden="true"
                    />
                ) : null}
                <span className="absolute top-5 left-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-blue-700">
                    Case study · {project.year}
                </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
                <section className="card-surface flex flex-col gap-5 p-6 sm:p-8">
                    <SectionHeading eyebrow="Overview" title="What I built" />
                    {(project.longDescription ?? []).map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-base leading-relaxed text-slate-600"
                        >
                            {paragraph}
                        </p>
                    ))}

                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                        Highlights
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {(project.highlights ?? []).map((highlight) => (
                            <li
                                key={highlight}
                                className="flex gap-2 text-sm leading-relaxed text-slate-600"
                            >
                                <FaCheckCircle
                                    className="mt-0.5 shrink-0 text-blue-500"
                                    aria-hidden="true"
                                />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>

                <aside className="flex flex-col gap-6">
                    <div className="card-surface flex flex-col p-6">
                        <h3 className="text-lg font-bold text-slate-900">
                            At a glance
                        </h3>
                        <dl className="mt-4 flex flex-col gap-4 text-sm">
                            <div>
                                <dt className="text-xs text-slate-500">Role</dt>
                                <dd className="font-medium text-slate-800">
                                    {project.role}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Year</dt>
                                <dd className="font-medium text-slate-800">
                                    {project.year || '—'}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">
                                    Stack
                                </dt>
                                <dd className="font-medium text-slate-800">
                                    {(project.tags ?? []).join(' · ') || '—'}
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex flex-col gap-3">
                            {project.demo_url && (
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <FaExternalLinkAlt aria-hidden="true" />{' '}
                                    Live demo
                                </a>
                            )}
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <FaGithub aria-hidden="true" /> Source code
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
                        <FaLayerGroup
                            className="text-2xl text-blue-600"
                            aria-hidden="true"
                        />
                        <h3 className="mt-3 text-lg font-bold text-slate-900">
                            Want to see more?
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            There are more experiments and full applications in
                            the project list.
                        </p>
                        <Link
                            to="/projects"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                        >
                            All projects <FaArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </aside>
            </div>

            <section className="flex flex-col gap-8">
                <SectionHeading
                    eyebrow="Keep exploring"
                    title="More projects"
                    centered
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {moreProjects.map((item) => (
                        <Card key={item.id} project={item} />
                    ))}
                </div>
            </section>

            <CallToAction
                title="Like what you see?"
                description="I would love to bring the same energy to your next project."
            />
        </div>
    );
};
