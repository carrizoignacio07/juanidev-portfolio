export const SectionHeading = ({
    eyebrow,
    title,
    subtitle,
    centered = false,
    light = false,
    children,
}) => {
    return (
        <div
            className={`flex flex-col gap-3 ${
                centered ? 'items-center text-center' : 'items-start'
            }`}
        >
            {eyebrow && (
                <span
                    className={`text-xs font-bold tracking-[0.2em] uppercase ${
                        light ? 'text-blue-100' : 'text-blue-600'
                    }`}
                >
                    {eyebrow}
                </span>
            )}
            <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                    light ? 'text-white' : 'text-slate-900'
                }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`max-w-2xl text-base leading-relaxed ${
                        light ? 'text-blue-50' : 'text-slate-600'
                    } ${centered ? 'mx-auto' : ''}`}
                >
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    );
};
