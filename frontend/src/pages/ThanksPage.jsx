import { useMemo } from 'react';
import { FaDatabase, FaGraduationCap, FaHeart } from 'react-icons/fa';

import { Loader } from '../components/Loader.jsx';
import { ThanksCard } from '../components/ThanksCard.jsx';
import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { mockThanks, withThanksVisuals } from '../data/mockData';
import { useApiData } from '../hooks/useApiData';

export const ThanksPage = () => {
    const { data, loading, isFallback } = useApiData('thanks', mockThanks);

    const thanks = useMemo(
        () => data.map((item) => withThanksVisuals(item)),
        [data]
    );

    const courses = useMemo(
        () => [
            ...new Map(
                thanks
                    .flatMap((item) =>
                        Array.isArray(item.courses) ? item.courses : []
                    )
                    .map((course) => [course.title, course])
            ).values(),
        ],
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
                    {isFallback && (
                        <span
                            className="chip"
                            title="The API is unavailable, so sample acknowledgements are shown"
                        >
                            <FaDatabase aria-hidden="true" /> Preview content
                        </span>
                    )}
                </div>
            </PageIntro>

            {loading ? (
                <Loader label="Loading acknowledgements…" />
            ) : (
                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {thanks.map((item) => (
                        <ThanksCard
                            key={item.id ?? item.creator}
                            thank={item}
                        />
                    ))}
                </section>
            )}

            {courses.length > 0 && (
                <section className="flex flex-col gap-6">
                    <SectionHeading
                        eyebrow="Keep learning"
                        title="Courses worth recommending"
                        subtitle="Some of the resources that helped me along the way."
                    />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course) => (
                            <a
                                key={course.id ?? course.title}
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-surface group flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:scale-110">
                                    <FaGraduationCap aria-hidden="true" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block truncate font-semibold text-slate-900">
                                        {course.title}
                                    </span>
                                    <span className="text-xs text-slate-500">
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
