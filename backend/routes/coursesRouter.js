import express from 'express';
import { fetchCourses } from '../fetchCourses.js';
import { supabase } from '../config/supabase.js';
import projectsMiddleware from '../middleware/projectsMiddleware.js';

const coursesRouter = express.Router();

coursesRouter.get('/', projectsMiddleware, async (req, res) => {
    const { data, error } = await fetchCourses(supabase);
    if (error) {
        console.error('Error fetching courses:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch courses',
        });
    }

    return res.status(200).json(data);
});
coursesRouter.get('/:id', projectsMiddleware, async (req, res) => {
    const { id } = req.params;
    const { data, error } = await fetchCourses(supabase).eq('id', id);
    if (error) {
        console.error('Error fetching course:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch course',
        });
    }

    return res.status(200).json(data);
});

export default coursesRouter;
