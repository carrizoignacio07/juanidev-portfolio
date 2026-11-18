import { Link } from 'react-router-dom';
import { FaHome, FaRocket, FaSearch } from 'react-icons/fa';

export const NotFoundPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 lg:py-24">
            <div className="relative">
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-blue-200/40 blur-3xl" />
                <span className="text-gradient relative text-8xl font-black tracking-tighter sm:text-9xl">
                    404
                </span>
            </div>

            <div className="flex flex-col gap-3">
                <span className="eyebrow">Page not found</span>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    This page took a detour
                </h1>
                <p className="mx-auto max-w-md text-base leading-relaxed text-slate-600">
                    The page you are looking for does not exist or has moved.
                    Let's get you back on track.
                </p>
            </div>

            <pre className="w-full overflow-x-auto rounded-2xl bg-slate-900 px-5 py-4 text-left font-mono text-xs leading-6 text-slate-200 sm:text-sm">
                <code>
                    <span className="text-blue-300">const</span> route ={' '}
                    <span className="text-slate-500">findRoute</span>(pathname);
                    {'\n'}
                    <span className="text-slate-500">// route → </span>
                    <span className="text-rose-300">null</span>
                    {'\n\n'}
                    <span className="text-emerald-300">
                        return
                    </span> home();{' '}
                    <span className="text-slate-500">// 🏠</span>
                </code>
            </pre>

            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/" className="btn-primary">
                    <FaHome aria-hidden="true" /> Back home
                </Link>
                <Link to="/projects" className="btn-secondary">
                    <FaRocket aria-hidden="true" /> See projects
                </Link>
            </div>

            <p className="inline-flex items-center gap-2 text-xs text-slate-400">
                <FaSearch aria-hidden="true" />
                You can also use the navigation above to explore the site.
            </p>
        </div>
    );
};
