export const fetchThanks = (supabase) =>
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
