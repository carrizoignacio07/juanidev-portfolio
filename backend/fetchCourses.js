export const fetchCourses = (supabase) =>
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
