import express from 'express';
import { supabase } from '../config/supabase.js';
import onlyGetMw from '../middleware/onlyGetMw.js';

const router = express.Router();

const fetchTechnologies = (supabase) =>
    supabase
        .from('technologies')
        .select(
            `
            id,
            name,
            category,
            icon
            `
        )
        .order('id', { ascending: true });

router.get('/', onlyGetMw, async (req, res) => {
    const { data, error } = await fetchTechnologies(supabase);
    if (error) {
        console.error('Error fetching technologies:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch technologies',
        });
    }

    return res.status(200).json(data);
});
router.get('/:id', onlyGetMw, async (req, res) => {
    const { id } = req.params;
    const { data, error } = await fetchTechnologies(supabase).eq('id', id);
    if (error) {
        console.error('Error fetching technology:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch technology',
        });
    }

    return res.status(200).json(data);
});

export default router;
