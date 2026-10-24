import express from 'express';
import { fetchProjects } from '../fetchProjects.js';
import { supabase } from '../config/supabase.js';
import projectsMiddleware from '../middleware/projectsMiddleware.js';

const projectsRouter = express.Router();

projectsRouter.get('/', projectsMiddleware, async (req, res) => {
    const { data, error } = await fetchProjects(supabase);

    if (error) {
        console.error('Error fetching projects:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch projects',
        });
    }

    return res.status(200).json(data);
});

export default projectsRouter;
