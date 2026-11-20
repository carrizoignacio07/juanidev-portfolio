import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaGithub,
    FaGraduationCap,
    FaPlayCircle,
} from 'react-icons/fa';

import { Loader } from '../components/Loader.jsx';
import { ApiErrorState } from '../components/ui/ApiErrorState';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { withThanksVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const CreatorPage = () => {
    const { creator } = useParams();
    const [imageFailed, setImageFailed] = useState(false);

    const { data, loading, error, reload } = useApiData(
        `thanks/${encodeURIComponent(creator ?? '')}`
    );

    const thank = data[0] ? withThanksVisuals(data[0]) : null;
    const courses = Array.isArray(thank?.courses) ? thank.courses : [];

    useEffect(() => {
        setImageFailed(false);
    }, [creator]);

    if (loading) {
        return (
            <div className="mx-auto flex w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
                <Loader label="Loading creator…" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-12">
                <PageIntro
                    eyebrow="Creator"
                    title="We couldn’t load this creator."
                    description="The API is unavailable right now. Please try again in a moment."
                    breadcrumb={[
                        { label: 'Home', to: '/' },
                        { label: 'Thanks', to: '/thanks' },
                        { label: 'Unavailable' },
                    ]}
                />
                <ApiErrorState label="creator" onRetry={reload} />
            </div>
        );
    }

    if (!thank) {
        return (
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-12">
                <PageIntro
                    eyebrow="404 · Creator"
                    title="This creator could not be found."
                    description="They may have been renamed or removed. Take a look at all the creators instead."
                    breadcrumb={[
                        { label: 'Home', to: '/' },
                        { label: 'Thanks', to: '/thanks' },
                        { label: 'Not found' },
                    ]}
                />
                <Link to="/thanks" className="btn-primary w-fit">
                    Browse all creators <FaArrowRight aria-hidden="true" />
                </Link>
            </div>
        );
    }

    const {
        creator: name,
        about = '',
        img,
        avatar = 'from-blue-500 to-cyan-400',
        github_url,
        about_url,
    } = thank;

    const initials = name
        .split(' ')
        .map((word) => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow="Creator · mentor"
                title={name}
                description={about}
                breadcrumb={[
                    { label: 'Home', to: '/' },
                    { label: 'Thanks', to: '/thanks' },
                    { label: name },
                ]}
            >
                <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center">
                    <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${avatar} text-xl font-bold text-white shadow-md`}
                    >
                        {img && !imageFailed ? (
                            <img
                                src={img}
                                alt={name}
                                onError={() => setImageFailed(true)}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            initials || <FaGraduationCap aria-hidden="true" />
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                        {about_url && (
                            <a
                                href={about_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full sm:w-auto"
                            >
                                <FaPlayCircle aria-hidden="true" /> View profile
                            </a>
                        )}
                        {github_url && (
                            <a
                                href={github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary w-full sm:w-auto"
                            >
                                <FaGithub aria-hidden="true" /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            </PageIntro>

            <section className="flex flex-col gap-6">
                <SectionHeading
                    eyebrow="Courses"
                    title={`Courses by ${name}`}
                    subtitle="Resources from this creator that helped me along the way."
                />

                {courses.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                        {courses.map((course) => (
                            <a
                                key={course.id ?? course.title}
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-surface group flex items-center gap-4 p-4 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:scale-110">
                                    <FaGraduationCap aria-hidden="true" />
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="line-clamp-2 font-semibold text-slate-900">
                                        {course.title}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                                        Open course{' '}
                                        <FaExternalLinkAlt aria-hidden="true" />
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="card-surface flex flex-col items-center gap-3 p-6 text-center sm:p-10">
                        <FaGraduationCap
                            className="text-3xl text-blue-500"
                            aria-hidden="true"
                        />
                        <p className="text-sm leading-relaxed text-slate-600">
                            No courses have been added for {name} yet.
                        </p>
                        <Link
                            to="/thanks"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                        >
                            Meet other creators{' '}
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                )}
            </section>

            <CallToAction
                title="Learning never stops"
                description="Want to recommend another creator or course? I would love to hear about it."
                primary={{ label: 'Share it with me', to: '/contact' }}
            />
        </div>
    );
};
