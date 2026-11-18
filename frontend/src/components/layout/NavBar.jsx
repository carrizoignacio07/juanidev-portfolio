import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/technologies', label: 'Stack' },
    { to: '/projects', label: 'Projects' },
    { to: '/thanks', label: 'Thanks' },
    { to: '/contact', label: 'Contact' },
];

const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
        isActive
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
    }`;

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

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
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-700 lg:hidden"
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {open && (
                <div
                    id="mobile-navigation"
                    className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur lg:hidden"
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
                    <Link to="/contact" className="btn-primary mt-2 sm:hidden">
                        Let's talk <FaArrowRight aria-hidden="true" />
                    </Link>
                </div>
            )}
        </nav>
    );
};
