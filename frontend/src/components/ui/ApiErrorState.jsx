import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

export const ApiErrorState = ({ label = 'content', onRetry }) => (
    <div
        className="card-surface flex flex-col items-center gap-3 p-6 text-center sm:p-10"
        role="alert"
    >
        <FaExclamationTriangle
            className="text-3xl text-amber-500"
            aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-slate-600">
            We couldn’t load the {label}. Check your connection and try again.
        </p>
        {onRetry && (
            <button
                type="button"
                onClick={onRetry}
                className="btn-primary w-full sm:w-auto"
            >
                <FaRedo aria-hidden="true" /> Retry
            </button>
        )}
    </div>
);
