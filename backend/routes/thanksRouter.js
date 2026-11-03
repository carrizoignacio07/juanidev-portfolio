import express from 'express';
import { fetchThanks } from '../fetchThanks.js';
import { supabase } from '../config/supabase.js';
import projectsMiddleware from '../middleware/projectsMiddleware.js';

const thanksRouter = express.Router();

thanksRouter.get('/', projectsMiddleware, async (req, res) => {
    const { data, error } = await fetchThanks(supabase);
    if (error) {
        console.error('Error fetching thanks:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch thanks',
        });
    }

    return res.status(200).json(data);
});
thanksRouter.get('/:id', projectsMiddleware, async (req, res) => {
    const { id } = req.params;
    const { data, error } = await fetchThanks(supabase).eq('id', id);
    if (error) {
        console.error('Error fetching thank:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch thank',
        });
    }

    return res.status(200).json(data);
});

export default thanksRouter;
