import express from 'express';
import { supabase } from '../config/supabase.js';
import onlyGetMw from '../middleware/onlyGetMw.js';

const router = express.Router();

const fetchCourses = (supabase) =>
    supabase
        .from('courses')
        .select(
            `
            id,
            title,
            url
        `
        )
        .order('id', { ascending: true });

router.get('/', onlyGetMw, async (req, res) => {
    const { data, error } = await fetchCourses(supabase);
    if (error) {
        console.error('Error fetching courses:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch courses',
        });
    }

    return res.status(200).json(data);
});
router.get('/:id', onlyGetMw, async (req, res) => {
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

export default router;
