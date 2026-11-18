import { useMemo, useState } from 'react';
import { FaDatabase, FaLayerGroup } from 'react-icons/fa';

import { Card } from '../components/Card.jsx';
import { Loader } from '../components/Loader.jsx';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { mockProjects, withProjectVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const ProjectsPage = () => {
    const { data, loading, isFallback } = useApiData('projects', mockProjects);
    const [filter, setFilter] = useState('All');

    const projects = useMemo(
        () => data.map((project) => withProjectVisuals(project)),
        [data]
    );

    const tags = useMemo(
        () =>
            [
                'All',
                ...new Set(projects.flatMap((project) => project.tags ?? [])),
            ].slice(0, 9),
        [projects]
    );

    const visibleProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.tags?.includes(filter));

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow="Selected work"
                title="Projects built with curiosity and care."
                description="A collection of things I have designed, built and shipped — from small experiments to full stack applications."
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
            >
                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="chip">
                        <FaLayerGroup aria-hidden="true" /> {projects.length}{' '}
                        projects
                    </span>
                    {isFallback && (
                        <span
                            className="chip"
                            title="The API is unavailable, so sample projects are shown"
                        >
                            <FaDatabase aria-hidden="true" /> Preview content
                        </span>
                    )}
                </div>
            </PageIntro>

            <section className="flex flex-col gap-8">
                <div
                    className="flex flex-wrap items-center gap-2"
                    role="group"
                    aria-label="Filter projects by technology"
                >
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => setFilter(tag)}
                            aria-pressed={filter === tag}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                                filter === tag
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                                    : 'border border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <Loader label="Loading projects…" />
                ) : visibleProjects.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleProjects.map((project) => (
                            <Card
                                key={project.id ?? project.title}
                                project={project}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="card-surface p-10 text-center text-sm text-slate-500">
                        No projects match this filter yet.
                    </div>
                )}
            </section>

            <CallToAction
                title="Want to see what I can do for you?"
                description="Let's talk about your idea and turn it into the next project on this list."
            />
        </div>
    );
};
