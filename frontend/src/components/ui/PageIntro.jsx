import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export const PageIntro = ({
    eyebrow,
    title,
    description,
    breadcrumb = [],
    children,
}) => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-white px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="relative flex flex-col gap-5">
                {breadcrumb.length > 0 && (
                    <nav
                        aria-label="Breadcrumb"
                        className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500"
                    >
                        {breadcrumb.map((item, index) => (
                            <span
                                key={`${item.label}-${index}`}
                                className="inline-flex items-center gap-1"
                            >
                                {index > 0 && (
                                    <FaChevronRight
                                        className="text-slate-300"
                                        aria-hidden="true"
                                    />
                                )}
                                {item.to ? (
                                    <Link
                                        to={item.to}
                                        className="transition hover:text-blue-700"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span
                                        className="text-slate-700"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                <h1 className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    {title}
                </h1>
                {description && (
                    <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        {description}
                    </p>
                )}
                {children}
            </div>
        </section>
    );
};
