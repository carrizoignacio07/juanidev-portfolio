import { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext.jsx';
import { Card } from '../components/Card.jsx';

export const ProjectsPage = () => {
    const { projects, loading } = useContext(ProjectsContext);
    console.log(projects);
    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                projects.map((project) => (
                    <Card
                        key={project._id}
                        title={project.title}
                        description={project.description}
                        demo_url={project.demo_url}
                        urlGithub={project.urlGithub}
                        image_url={project.image_url}
                        project_technologies={project.technologies}
                    />
                ))
            )}
        </section>
    );
};
