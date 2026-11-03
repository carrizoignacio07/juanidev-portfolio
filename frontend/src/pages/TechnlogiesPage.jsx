import { useEffect, useState } from 'react';
import { fetchHttp } from '../helpers/fetchHttp';
import { TechCard } from '../components/TechCard';

export const TechnlogiesPage = () => {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchHttp('technologies', setLoading, setTechnologies);
    }, []);
    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                technologies.map((tech) => (
                    <TechCard
                        key={tech.id}
                        name={tech.name}
                        category={tech.category}
                        image={tech.image}
                    />
                ))
            )}
        </section>
    );
};
