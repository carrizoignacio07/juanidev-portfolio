import { Link } from 'react-router-dom';
import { FaCode, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

import { CallToAction } from '../components/ui/CallToAction';
import { PageIntro } from '../components/ui/PageIntro';
import { SectionHeading } from '../components/ui/SectionHeading';
import { aboutContent, brand, stats } from '../data/siteContent.js';

export const AboutPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:gap-14 sm:px-8 lg:gap-20 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow={aboutContent.intro.eyebrow}
                title={aboutContent.intro.title}
                description={aboutContent.lead}
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
            />

            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div className="flex flex-col gap-5">
                    <SectionHeading
                        eyebrow={aboutContent.story.eyebrow}
                        title={aboutContent.story.title}
                    />
                    {aboutContent.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-base leading-relaxed text-slate-600"
                        >
                            {paragraph}
                        </p>
                    ))}

                    <div className="grid gap-3 pt-2 sm:grid-cols-2">
                        {aboutContent.facts.map((fact) => (
                            <div
                                key={fact.label}
                                className="card-surface flex items-center gap-3 p-4 sm:p-5"
                            >
                                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        {fact.label}
                                    </p>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        {fact.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-cyan-100/60 blur-2xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                            <span className="h-3 w-3 rounded-full bg-red-300" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-300" />
                            <span className="ml-3 font-mono text-xs text-slate-400 dark:text-slate-500">
                                about-me.md
                            </span>
                        </div>

                        <div className="flex flex-col gap-5 p-5 sm:p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-blue-500/25 sm:h-20 sm:w-20 sm:text-2xl">
                                    {brand.initials}
                                </div>
                                <div>
                                    <p className="text-base font-bold text-slate-900 [overflow-wrap:anywhere] dark:text-slate-100 sm:text-lg">
                                        {aboutContent.fullName}
                                    </p>
                                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                        {brand.role}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {aboutContent.lead}
                            </p>

                            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-[11px] leading-6 text-slate-200 sm:text-xs">
                                <code>
                                    <span className="text-blue-300">const</span>{' '}
                                    developer = {'{'}
                                    {'\n  '}name:{' '}
                                    <span className="text-emerald-300">
                                        '{aboutContent.code.name}'
                                    </span>
                                    ,{'\n  '}focus:{' '}
                                    <span className="text-rose-300">
                                        [
                                        {aboutContent.code.focus
                                            .map((item) => `'${item}'`)
                                            .join(', ')}
                                        ]
                                    </span>
                                    ,{'\n  '}coffee:{' '}
                                    <span className="text-amber-300">
                                        {String(aboutContent.code.coffee)}
                                    </span>
                                    {'\n'}
                                    {'}'};
                                </code>
                            </pre>

                            <Link
                                to="/contact"
                                className="btn-secondary w-full"
                            >
                                <FaRocket aria-hidden="true" />{' '}
                                {aboutContent.cta.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                aria-label="Quick stats"
                className="grid w-full grid-cols-2 gap-4 rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:grid-cols-4 sm:p-8"
            >
                {stats.map(({ icon: Icon, value, label }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center gap-1 text-center"
                    >
                        <Icon
                            className="mb-1 text-2xl text-blue-500"
                            aria-hidden="true"
                        />
                        <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {value}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                            {label}
                        </span>
                    </div>
                ))}
            </section>

            <section className="flex flex-col gap-8">
                <SectionHeading
                    eyebrow={aboutContent.journey.eyebrow}
                    title={aboutContent.journey.title}
                    subtitle={aboutContent.journey.subtitle}
                />
                <ol className="relative flex flex-col gap-6 border-l-2 border-blue-100 pl-5 dark:border-slate-800 sm:pl-8">
                    {aboutContent.timeline.map((item) => (
                        <li key={item.year} className="relative">
                            <span className="absolute -left-7 top-2 h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-sm dark:border-slate-950 dark:bg-blue-500 sm:-left-10" />
                            <div className="card-surface flex flex-col gap-2 p-5 sm:p-6">
                                <span className="chip w-fit">{item.year}</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                    {item.role}
                                </h3>
                                <p className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    <FaMapMarkerAlt aria-hidden="true" />
                                    {item.place}
                                </p>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="flex flex-col gap-8">
                <SectionHeading
                    eyebrow={aboutContent.valuesHeading.eyebrow}
                    title={aboutContent.valuesHeading.title}
                    centered
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {aboutContent.values.map(
                        ({ icon: Icon, title, description }) => (
                            <article
                                key={title}
                                className="card-surface flex flex-col items-center gap-4 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 sm:p-6"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-xl text-white shadow-md">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {description}
                                </p>
                            </article>
                        )
                    )}
                </div>
            </section>

            <CallToAction
                title={aboutContent.cta.title}
                description={aboutContent.cta.description}
                primary={{ label: aboutContent.cta.label, to: '/contact' }}
            />

            <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-400 dark:text-slate-500">
                <FaCode aria-hidden="true" /> {aboutContent.note}
            </p>
        </div>
    );
};
