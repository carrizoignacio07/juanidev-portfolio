export const fetchThanks = (supabase) =>
    supabase
        .from('thanks_to')
        .select(
            `
      id,
      creator,
    `
        )
        .order('id', { ascending: true });
