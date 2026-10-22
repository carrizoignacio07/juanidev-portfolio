import express from 'express';
import { loadEnvFile } from 'node:process';
import { createClient } from '@supabase/supabase-js';
import { fetchProjects } from './projects.js';

loadEnvFile('.env');

const app = express();
const port = process.env.PORT || 3000;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY
);

app.get('/api/projects', async (req, res) => {
    const { data, error } = await fetchProjects(supabase);

    if (error) {
        console.error('Error fetching projects:', error.message);
        return res.status(500).json({
            error: 'Failed to fetch projects',
        });
    }

    res.json(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
