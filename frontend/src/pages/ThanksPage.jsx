import { useMemo } from 'react';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';

import { Loader } from '../components/Loader.jsx';
import { ThanksCard } from '../components/ThanksCard.jsx';
import { ApiErrorState } from '../components/ui/ApiErrorState';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { withThanksVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const ThanksPage = () => {
    const { data, loading, error, reload } = useApiData('thanks');

    const thanks = useMemo(
        () => data.map((item) => withThanksVisuals(item)),
        [data]
    );

    const courses = useMemo(
        () =>
            [
                ...new Map(
                    thanks
                        .flatMap((item) =>
                            Array.isArray(item.courses) ? item.courses : []
                        )
                        .map((course) => [course.title, course])
                ).values(),
            ].slice(0, 3),
        [thanks]
    );

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow="Acknowledgements"
                title="Standing on the shoulders of great teachers."
                description="A few people and resources that made the journey easier, clearer and a lot more fun. Thank you for sharing your knowledge."
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Thanks' }]}
            >
                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="chip">
                        <FaHeart aria-hidden="true" /> {thanks.length} mentions
                    </span>
                </div>
            </PageIntro>

            {loading ? (
                <Loader label="Loading acknowledgements…" />
            ) : error ? (
                <ApiErrorState label="acknowledgements" onRetry={reload} />
            ) : thanks.length > 0 ? (
                <section className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {thanks.map((item) => (
                        <ThanksCard
                            key={item.id ?? item.creator}
                            thank={item}
                        />
                    ))}
                </section>
            ) : (
                <div className="card-surface p-6 text-center text-sm text-slate-500 dark:text-slate-400 sm:p-10">
                    No acknowledgements have been added yet.
                </div>
            )}

            {courses.length > 0 && (
                <section className="flex flex-col gap-6">
                    <SectionHeading
                        eyebrow="Keep learning"
                        title="Courses worth recommending"
                        subtitle="Some of the resources that helped me along the way."
                    />
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                        {courses.map((course) => (
                            <a
                                key={course.id ?? course.title}
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-surface group flex items-center gap-4 p-4 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:border-blue-500/60 dark:hover:shadow-blue-500/5 sm:p-5"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:scale-110 dark:bg-slate-800 dark:text-blue-400">
                                    <FaGraduationCap aria-hidden="true" />
                                </span>
                                <span className="min-w-0">
                                    <span className="line-clamp-2 font-semibold text-slate-900 dark:text-slate-100">
                                        {course.title}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Recommended resource
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            <CallToAction
                title="Learning never stops"
                description="Have a resource that changed the way you build? I would love to hear about it."
                primary={{ label: 'Share it with me', to: '/contact' }}
            />
        </div>
    );
};
