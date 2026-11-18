const API_URL =
    import.meta.env.VITE_API_URL ||
    'https://backend-juanidev-portfolio.vercel.app/api/';

const baseUrl = API_URL.endsWith('/') ? API_URL : `${API_URL}/`;

export const fetchHttp = async (endPoint, setLoading, setState) => {
    setLoading?.(true);

    try {
        const response = await fetch(`${baseUrl}${endPoint}`, {
            headers: { Accept: 'application/json' },
        });

        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setState?.(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        setLoading?.(false);
    }
};
