import { useMemo, useState } from 'react';
import { FaDatabase } from 'react-icons/fa';

import { Loader } from '../components/Loader.jsx';
import { TechCard } from '../components/TechCard.jsx';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { mockTechnologies, withTechVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const TechnlogiesPage = () => {
    const { data, loading, isFallback } = useApiData(
        'technologies',
        mockTechnologies
    );
    const [category, setCategory] = useState('All');

    const technologies = useMemo(
        () => data.map((tech) => withTechVisuals(tech)),
        [data]
    );

    const categories = useMemo(
        () => ['All', ...new Set(technologies.map((tech) => tech.category))],
        [technologies]
    );

    const visible =
        category === 'All'
            ? technologies
            : technologies.filter((tech) => tech.category === category);

    const grouped = categories
        .filter((item) => item !== 'All')
        .map((item) => ({
            category: item,
            items: visible.filter((tech) => tech.category === item),
        }))
        .filter((group) => group.items.length > 0);

    const strongest = technologies
        .filter((tech) => tech.levelValue > 0)
        .sort((a, b) => b.levelValue - a.levelValue)
        .slice(0, 6);

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow="My toolbox"
                title="The technologies I work with."
                description="Tools I reach for every day, chosen for the problem at hand rather than hype. The list keeps growing with every project."
                breadcrumb={[
                    { label: 'Home', to: '/' },
                    { label: 'Technologies' },
                ]}
            >
                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="chip">{technologies.length} tools</span>
                    {isFallback && (
                        <span
                            className="chip"
                            title="The API is unavailable, so sample technologies are shown"
                        >
                            <FaDatabase aria-hidden="true" /> Preview content
                        </span>
                    )}
                </div>
            </PageIntro>

            <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Filter technologies by category"
            >
                {categories.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        aria-pressed={category === item}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                            category === item
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                                : 'border border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {loading ? (
                <Loader label="Loading technologies…" />
            ) : category !== 'All' ? (
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {visible.map((tech) => (
                        <TechCard key={tech.id ?? tech.name} tech={tech} />
                    ))}
                </section>
            ) : (
                <div className="flex flex-col gap-12">
                    {grouped.map((group) => (
                        <section
                            key={group.category}
                            className="flex flex-col gap-6"
                        >
                            <SectionHeading
                                eyebrow={`${group.items.length} tools`}
                                title={group.category}
                            />
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {group.items.map((tech) => (
                                    <TechCard
                                        key={tech.id ?? tech.name}
                                        tech={tech}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}

            <section className="card-surface flex flex-col gap-6 p-6 sm:p-8">
                <SectionHeading
                    eyebrow="Comfort zone"
                    title="Where I feel at home"
                    subtitle="A rough, honest view of the tools I use most often."
                />
                <div className="grid gap-5 md:grid-cols-2">
                    {strongest.map((tech) => (
                        <div key={tech.name} className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-2 text-sm">
                                <span className="font-medium text-slate-800">
                                    {tech.name}
                                </span>
                                <span className="text-slate-500">
                                    {tech.levelValue}%
                                </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                                    style={{ width: `${tech.levelValue}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CallToAction
                title="The right tool for your idea"
                description="Tell me what you are building and I will bring the stack that fits it best."
                primary={{ label: "Let's talk", to: '/contact' }}
            />
        </div>
    );
};
