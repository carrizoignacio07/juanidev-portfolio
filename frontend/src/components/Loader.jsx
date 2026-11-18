export const Loader = ({ label = 'Loading content…' }) => {
    return (
        <div
            className="col-span-full flex w-full flex-col items-center justify-center gap-3 py-16 text-slate-500"
            role="status"
            aria-live="polite"
        >
            <svg
                className="h-10 w-10 animate-spin text-blue-600"
                viewBox="0 0 50 50"
                aria-hidden="true"
            >
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-20"
                />
                <path
                    fill="currentColor"
                    className="opacity-90"
                    d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
                />
            </svg>
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};
