import { useState } from 'react';
import { useEffect } from 'react';
import { fetchHttp } from '../helpers/fetchHttp';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(async () => {
        await fetchHttp('/api/projects', setProjects);
    }, []);
    return (
        <section>
            <></>
        </section>
    );
};
