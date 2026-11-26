import {
    FaCheckCircle,
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';

import { ContactForm } from '../components/ContactForm.jsx';
import { LinksRRSS } from '../components/ui/LinksRRSS.jsx';
import { PageIntro } from '../components/ui/PageIntro.jsx';
import { contactContent } from '../data/siteContent.js';

export const ContactPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 lg:gap-16 lg:px-12 lg:py-14">
            <PageIntro
                eyebrow={contactContent.intro.eyebrow}
                title={contactContent.intro.title}
                description={contactContent.intro.description}
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
            />

            <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col gap-6">
                    <div className="card-surface flex flex-col gap-5 p-6 sm:p-8">
                        <span className="chip w-fit">
                            <FaCheckCircle aria-hidden="true" />
                            {contactContent.availability}
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                {contactContent.reach.title}
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {contactContent.reach.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                            <a
                                href={`mailto:${contactContent.email}`}
                                className="group flex items-start gap-3"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-800 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                                    <FaEnvelope aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                                        {contactContent.labels.email}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-800 [overflow-wrap:anywhere] transition group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-300">
                                        {contactContent.email}
                                    </span>
                                </span>
                            </a>

                            <div className="flex items-start gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                                    <FaMapMarkerAlt aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                                        {contactContent.labels.location}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-800 [overflow-wrap:anywhere] dark:text-slate-200">
                                        {contactContent.location}
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                                    <FaClock aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                                        {contactContent.labels.responseTime}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                        {contactContent.responseTime}
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {contactContent.socials.map(
                                ({ label, href, icon: Icon }) => (
                                    <LinksRRSS
                                        key={label}
                                        link={href}
                                        label={label}
                                        className="chip tap-target min-h-11 transition hover:bg-blue-100"
                                    >
                                        <Icon aria-hidden="true" /> {label}
                                    </LinksRRSS>
                                )
                            )}
                        </div>
                    </div>

                    <div className="card-surface flex flex-col gap-4 p-6 sm:p-8">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            {contactContent.goodToKnow}
                        </h3>
                        {contactContent.faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="border-l-2 border-blue-100 pl-3 dark:border-slate-700 sm:pl-4"
                            >
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    {faq.question}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};
