import { createClient } from '@supabase/supabase-js';
import { fetchProjects } from '../backend/projects.js';

export default async function handler(request, response) {
    if (request.method !== 'GET') {
        response.setHeader('Allow', 'GET');
        return response.status(405).json({
            error: 'Method not allowed',
        });
    }

    const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = process.env;

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
        console.error('Missing Supabase environment variables.');
        return response.status(500).json({
            error: 'Server configuration error',
        });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    const { data, error } = await fetchProjects(supabase);

    if (error) {
        console.error('Error fetching projects:', error.message);
        return response.status(500).json({
            error: 'Failed to fetch projects',
        });
    }

    return response.status(200).json(data);
}
