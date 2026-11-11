export const LinksRRSS = ({ link, children }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};
