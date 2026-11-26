import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaGithub,
    FaGraduationCap,
    FaPlayCircle,
} from 'react-icons/fa';

const MAX_VISIBLE_COURSES = 5;

const normalizeCourses = (courses) =>
    Array.isArray(courses)
        ? [
              ...new Map(
                  courses
                      .filter((course) => course?.title && course?.url)
                      .map((course) => [course.id ?? course.title, course])
              ).values(),
          ]
        : [];

export const ThanksCard = ({ thank }) => {
    const [imageFailed, setImageFailed] = useState(false);

    const {
        creator,
        about = '',
        img,
        avatar = 'from-blue-500 to-cyan-400',
        github_url,
        about_url,
        courses: rawCourses = [],
    } = thank ?? {};

    const courses = normalizeCourses(rawCourses);
    const visibleCourses = courses.slice(0, MAX_VISIBLE_COURSES);
    const hiddenCoursesCount = courses.length - visibleCourses.length;

    const initials = (creator ?? '')
        .split(' ')
        .map((word) => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();

    const creatorPath = `/thanks/${encodeURIComponent(creator ?? '')}`;

    return (
        <article className="group relative flex h-full flex-col gap-5 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6">
            <div className="flex items-start gap-4">
                <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${avatar} text-lg font-bold text-white shadow-md`}
                >
                    {img && !imageFailed ? (
                        <img
                            src={img}
                            alt={creator}
                            onError={() => setImageFailed(true)}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        initials || <FaGraduationCap aria-hidden="true" />
                    )}
                </div>
                <div className="min-w-0">
                    <h3 className="text-lg leading-tight font-bold text-slate-900 [overflow-wrap:anywhere]">
                        <Link
                            to={creatorPath}
                            aria-label={`See courses by ${creator}`}
                            className="transition hover:text-blue-700 after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            {creator}
                        </Link>
                    </h3>
                    <p className="text-xs font-medium text-blue-600">
                        Mentor & inspiration
                    </p>
                </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">{about}</p>

            {courses.length > 0 && (
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold text-slate-500">
                        Courses ({courses.length})
                    </p>
                    <ul className="flex flex-col gap-1.5">
                        {visibleCourses.map((course) => (
                            <li key={course.id ?? course.title}>
                                <a
                                    href={course.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tap-target relative z-10 w-full justify-start gap-2 rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    <FaGraduationCap
                                        className="shrink-0 text-blue-500"
                                        aria-hidden="true"
                                    />
                                    <span className="min-w-0 flex-1 truncate [overflow-wrap:anywhere]">
                                        {course.title}
                                    </span>
                                    <FaExternalLinkAlt
                                        className="shrink-0 text-slate-400"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                        {hiddenCoursesCount > 0 && (
                            <li>
                                <Link
                                    to={creatorPath}
                                    aria-label={`See all ${courses.length} courses by ${creator}`}
                                    className="tap-target relative z-10 w-full justify-start gap-2 rounded-lg px-3 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    +{hiddenCoursesCount} more{' '}
                                    <FaArrowRight aria-hidden="true" />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4">
                <Link
                    to={creatorPath}
                    aria-label={`See courses by ${creator}`}
                    className="tap-target relative z-10 w-full gap-1.5 rounded-full bg-blue-50 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                    See courses <FaArrowRight aria-hidden="true" />
                </Link>
                <div className="flex flex-wrap items-center gap-2">
                    {about_url && (
                        <a
                            href={about_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tap-target relative z-10 flex-1 gap-1.5 rounded-full bg-blue-600 px-4 text-xs font-semibold text-white transition hover:bg-blue-700"
                        >
                            <FaPlayCircle aria-hidden="true" /> View
                        </a>
                    )}
                    {github_url && (
                        <a
                            href={github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tap-target relative z-10 flex-1 gap-1.5 rounded-full border border-slate-200 px-4 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
                        >
                            <FaGithub aria-hidden="true" /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};
