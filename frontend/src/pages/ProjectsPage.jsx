import { useState } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext.jsx';

const URL = `https://backend-juanidev-portfolio.vercel.app/api/projects`;

export const ProjectsPage = () => {
    const { projects, loading } = useContext(ProjectsContext);

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
