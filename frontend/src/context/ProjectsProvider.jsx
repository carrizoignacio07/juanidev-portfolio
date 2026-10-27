import { useEffect, useState } from 'react';
import { ProjectsContext } from './ProjectsContext';

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProjects(data.products);
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
