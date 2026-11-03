export const Loader = () => {
    return (
        <svg
            className="animate-spin h-10 w-10 text-black"
            viewBox="10 10 50 50"
        >
            <circle
                className="opacity-75"
                cx="50"
                cy="50"
                r="10"
                fill="currentColor"
            />
            <path
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5a6 6 0 006-6h4a6 6 0 00-6-6V5a6 6 0 00-6 6h4z"
            />
        </svg>
    );
};
