export const fetchProjects = (supabase) =>
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
      created_at,
      project_technologies (
        technologies (
          id,
          name,
          category,
          icon
        )
      )
    `
        )
        .order('id', { ascending: true });
