import { Link } from 'react-router-dom';
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaTwitter,
} from 'react-icons/fa';

import { contactContent } from '../../data/mockData';
import { LinksRRSS } from '../ui/LinksRRSS';

const socials = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ignacio-carrizo/',
        icon: FaLinkedin,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/carrizoignacio07',
        icon: FaGithub,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/ignacio.carrizo.798',
        icon: FaFacebook,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/carrizoignacio2',
        icon: FaTwitter,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/carrizoignacio1/',
        icon: FaInstagram,
    },
];

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About me', to: '/about' },
    { label: 'Stack', to: '/technologies' },
    { label: 'Projects', to: '/projects' },
    { label: 'Thanks', to: '/thanks' },
    { label: 'Contact', to: '/contact' },
];

export const Footer = () => {
    return (
        <footer className="relative mt-auto overflow-hidden bg-slate-900 text-slate-300">
            <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr] lg:px-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
                            JD
                        </span>
                        <span className="text-lg font-bold text-white">
                            Juani<span className="text-blue-400">Dev</span>
                        </span>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                        Full stack developer turning ideas into simple, fast and
                        beautiful web experiences.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <LinksRRSS
                                key={label}
                                link={href}
                                label={label}
                                className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white sm:h-9 sm:w-9"
                            >
                                <Icon aria-hidden="true" />
                            </LinksRRSS>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold tracking-[0.18em] text-white uppercase">
                        Explore
                    </h3>
                    {quickLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className="tap-target w-fit gap-1 text-sm text-slate-400 transition hover:text-blue-300"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold tracking-[0.18em] text-white uppercase">
                        Get in touch
                    </h3>
                    <a
                        href={`mailto:${contactContent.email}`}
                        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-blue-300"
                    >
                        <FaEnvelope aria-hidden="true" />
                        {contactContent.email}
                    </a>
                    <p className="inline-flex items-center gap-2 text-sm text-slate-400">
                        <FaMapMarkerAlt aria-hidden="true" />
                        {contactContent.location}
                    </p>
                    <p className="pt-1 text-xs text-slate-500">
                        {contactContent.responseTime}
                    </p>
                </div>
            </div>

            <div className="relative border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500 sm:px-8">
                © {new Date().getFullYear()} JuaniDev. Built with React, Vite
                and Tailwind CSS.
            </div>
        </footer>
    );
};
