import express from 'express';
import { supabase } from '../config/supabase.js';
import onlyGetMw from '../middleware/onlyGetMw.js';

const router = express.Router();

const fetchProjects = (supabase) =>
    supabase
        .from('projects')
        .select(
            `
                id,
                title,
                description,
                github_url,
                demo_url,
                image_url,
                created_at
            `
        )
        .order('id', { ascending: true });

router.get('/', onlyGetMw, async (req, res) => {
    const { data, error } = await fetchProjects(supabase);

    if (error) {
        console.error('Error fetching projects:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch projects',
        });
    }

    return res.status(200).json(data);
});
router.get('/:id', onlyGetMw, async (req, res) => {
    const { id } = req.params;
    const { data, error } = await fetchProjects(supabase).eq('id', id);

    if (error) {
        console.error('Error fetching project:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch project',
        });
    }

    return res.status(200).json(data);
});

export default router;
