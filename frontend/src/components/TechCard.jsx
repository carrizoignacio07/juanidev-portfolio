export const TechCard = ({ name, category, image }) => {
    return (
        <article>
            <h3>{name}</h3>
            <p>{category}</p>
            <img src={image} alt={name} />
        </article>
    );
};
