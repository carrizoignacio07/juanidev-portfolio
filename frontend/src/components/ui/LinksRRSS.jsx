export const LinksRRSS = ({ link, children, className = '', label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex items-center justify-center transition ${className}`}
        >
            {children}
        </a>
    );
};
