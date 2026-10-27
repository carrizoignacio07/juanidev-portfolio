import { useEffect, useState } from 'react';
import { ProjectsContext } from './ProjectsContext';

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const response = await fetch(
            'https://backend-juanidev-portfolio.vercel.app/api/projects'
        );
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    );
};
