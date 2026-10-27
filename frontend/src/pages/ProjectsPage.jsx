import { useState } from 'react';
import { useEffect } from 'react';
import { fetchHttp } from '../helpers/fetchHttp';

const URL = `https://backend-juanidev-portfolio.vercel.app/api/projects`;

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        fetchHttp(URL, setLoading, setProjects);
    }, []);

    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                projects.map((project) => (
                    <div
                        key={project._id}
                        className="bg-gray-800 p-5 rounded-lg"
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {project.name}
                        </h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))
            )}
        </section>
    );
};
