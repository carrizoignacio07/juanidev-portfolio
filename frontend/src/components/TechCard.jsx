export const TechCard = ({ name, category, image }) => {
    return (
        <article className="p-5 max-w-96 bg-sky-100 flex flex-col justify-center items-center">
            <h3>{name}</h3>
            <p>{category}</p>
            <img src={image} alt={name} />
        </article>
    );
};
