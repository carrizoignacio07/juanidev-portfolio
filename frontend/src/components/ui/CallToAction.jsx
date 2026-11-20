import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaRocket } from 'react-icons/fa';

export const CallToAction = ({
    title = "Let's build something together",
    description = 'Have a project in mind or just want to say hi? My inbox is always open.',
    email = 'hello@juani.dev',
    primary = { label: 'Start a conversation', to: '/contact' },
    secondaryLabel = 'Say hello',
}) => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 px-5 py-10 text-center text-white sm:px-10 sm:py-12 lg:py-16">
            <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-cyan-200/20 blur-2xl" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                <FaRocket
                    className="text-4xl text-white/80"
                    aria-hidden="true"
                />
                <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
                <p className="text-blue-50">{description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to={primary.to}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                    >
                        {primary.label}
                        <FaArrowRight aria-hidden="true" />
                    </Link>
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                        >
                            <FaEnvelope aria-hidden="true" />
                            {secondaryLabel}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};
