import { useState } from 'react';
import { FaCode } from 'react-icons/fa';

export const TechCard = ({ tech }) => {
    const [imageFailed, setImageFailed] = useState(false);

    const {
        name,
        category = 'Tool',
        icon,
        Icon,
        color = 'text-blue-600',
        level,
        years,
    } = tech ?? {};

    const FallbackIcon = Icon ?? FaCode;

    return (
        <article className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5">
            <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/70 text-xl transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-2xl ${color}`}
            >
                {icon && !imageFailed ? (
                    <img
                        src={icon}
                        alt=""
                        onError={() => setImageFailed(true)}
                        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                    />
                ) : (
                    <FallbackIcon aria-hidden="true" />
                )}
            </div>

            <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 [overflow-wrap:anywhere]">
                    {name}
                </h3>
                <p className="text-xs font-medium text-blue-600">{category}</p>
                {(level || years) && (
                    <p className="mt-1 text-xs text-slate-500">
                        {[level, years].filter(Boolean).join(' · ')}
                    </p>
                )}
            </div>
        </article>
    );
};
