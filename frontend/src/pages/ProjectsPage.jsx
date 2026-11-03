import { useEffect, useState } from 'react';
import { fetchHttp } from '../helpers/fetchHttp';
import { Card } from '../components/Card.jsx';
import { Loader } from '../components/Loader.jsx';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchHttp('projects', setLoading, setProjects);
    }, []);

    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {loading ? (
                <Loader />
            ) : (
                projects.map((project) => (
                    <Card
                        id={project._id}
                        title={project.title}
                        description={project.description}
                        demo_url={project.demo_url}
                        urlGithub={project.urlGithub}
                        image_url={project.image_url}
                    />
                ))
            )}
        </section>
    );
};
