import { useState } from 'react';
import { FaGithub, FaGraduationCap, FaPlayCircle } from 'react-icons/fa';

export const ThanksCard = ({ thank }) => {
    const [imageFailed, setImageFailed] = useState(false);

    const {
        creator,
        about = '',
        img,
        avatar = 'from-blue-500 to-cyan-400',
        github_url,
        about_url,
        courses = [],
    } = thank ?? {};

    const initials = (creator ?? '')
        .split(' ')
        .map((word) => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <article className="group flex h-full flex-col gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4">
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
                    <h3 className="truncate text-lg font-bold text-slate-900">
                        {creator}
                    </h3>
                    <p className="text-xs font-medium text-blue-600">
                        Mentor & inspiration
                    </p>
                </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">{about}</p>

            {courses.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                        <li key={course.id ?? course.title}>
                            <a
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                            >
                                <FaGraduationCap aria-hidden="true" />
                                {course.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                {about_url && (
                    <a
                        href={about_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                    >
                        <FaPlayCircle aria-hidden="true" /> View
                    </a>
                )}
                {github_url && (
                    <a
                        href={github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
                    >
                        <FaGithub aria-hidden="true" /> GitHub
                    </a>
                )}
            </div>
        </article>
    );
};
