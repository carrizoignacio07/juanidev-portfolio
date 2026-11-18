import { NavLink } from 'react-router-dom';

import { NavBar } from './NavBar.jsx';

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-100/80 bg-white/85 backdrop-blur-lg">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
                <NavLink
                    to="/"
                    className="group flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-label="JuaniDev — home"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition group-hover:scale-105">
                        JD
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="text-base font-bold tracking-tight text-slate-900">
                            Juani<span className="text-blue-600">Dev</span>
                        </span>
                        <span className="hidden text-[10px] font-medium tracking-[0.18em] text-slate-400 uppercase sm:block">
                            Full stack developer
                        </span>
                    </span>
                </NavLink>

                <NavBar />
            </div>
        </header>
    );
};
