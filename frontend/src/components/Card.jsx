import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const Card = ({ project }) => {
    const [imageFailed, setImageFailed] = useState(false);

    const {
        id,
        title,
        description = '',
        demo_url,
        github_url,
        image_url,
        tags = [],
        cover = 'from-blue-500 via-sky-500 to-cyan-400',
        icon: Icon,
    } = project ?? {};

    const showImage = Boolean(image_url) && !imageFailed;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div
                className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${cover} sm:h-44`}
            >
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

                {showImage ? (
                    <img
                        src={image_url}
                        alt={title}
                        onError={() => setImageFailed(true)}
                        className="relative h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : Icon ? (
                    <Icon
                        className="relative text-5xl text-white/90 transition duration-300 group-hover:scale-110"
                        aria-hidden="true"
                    />
                ) : null}

                {id && (
                    <Link
                        to={`/projects/${id}`}
                        aria-label={`See details of ${title}`}
                        className="tap-target absolute right-3 bottom-3 gap-1.5 rounded-full bg-white/90 px-3 text-xs font-semibold text-blue-700 shadow-sm transition focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    >
                        Details <FaArrowRight aria-hidden="true" />
                    </Link>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                    {id ? (
                        <Link
                            to={`/projects/${id}`}
                            className="transition hover:text-blue-700"
                        >
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h3>

                <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {description}
                </p>

                {tags.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {(demo_url || github_url) && (
                    <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 sm:gap-5">
                        {demo_url && (
                            <a
                                href={demo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tap-target gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                            >
                                <FaExternalLinkAlt aria-hidden="true" /> Demo
                            </a>
                        )}
                        {github_url && (
                            <a
                                href={github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tap-target gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
                            >
                                <FaGithub aria-hidden="true" /> Code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};
