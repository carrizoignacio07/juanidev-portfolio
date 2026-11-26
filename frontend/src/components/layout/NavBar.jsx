import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/technologies', label: 'Stack' },
    { to: '/projects', label: 'Projects' },
    { to: '/thanks', label: 'Thanks' },
    { to: '/contact', label: 'Contact' },
];

const navLinkClass = ({ isActive }) =>
    `tap-target rounded-full px-3 text-sm font-medium transition sm:px-4 ${
        isActive
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-500'
            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300'
    }`;

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const { isDark, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    const ThemeIcon = isDark ? FaSun : FaMoon;

    return (
        <nav className="flex items-center gap-2" aria-label="Main navigation">
            <div className="hidden items-center gap-1 lg:flex">
                {links.map(({ to, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={navLinkClass}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>

            <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeLabel}
                title={themeLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300 dark:focus-visible:outline-blue-400"
            >
                <ThemeIcon aria-hidden="true" />
            </button>

            <Link
                to="/contact"
                className="btn-primary hidden px-5 py-2.5 sm:inline-flex"
            >
                Let's talk <FaArrowRight aria-hidden="true" />
            </Link>

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300 dark:focus-visible:outline-blue-400 lg:hidden"
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {open && (
                <div
                    id="mobile-navigation"
                    className="absolute inset-x-0 top-full flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-b border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
                >
                    {links.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={navLinkClass}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-primary mt-2 w-full sm:hidden"
                    >
                        Let's talk <FaArrowRight aria-hidden="true" />
                    </Link>
                </div>
            )}
        </nav>
    );
};
