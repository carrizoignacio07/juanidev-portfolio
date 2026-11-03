import express from 'express';
import { supabase } from '../config/supabase.js';
import onlyGetMw from '../middleware/onlyGetMw.js';

const router = express.Router();

const fetchThanks = (supabase) =>
    supabase
        .from('thanks_to')
        .select(
            `
            id,
            creator,
            about,
            img,
            github_url,
            about_url
        `
        )
        .order('id', { ascending: true });

router.get('/', onlyGetMw, async (req, res) => {
    const { data, error } = await fetchThanks(supabase);
    if (error) {
        console.error('Error fetching thanks:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch thanks',
        });
    }

    return res.status(200).json(data);
});
router.get('/:id', onlyGetMw, async (req, res) => {
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

export default router;
