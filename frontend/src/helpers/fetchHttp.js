export const fetchHttp = async (URL, setLoading, setState) => {
    setLoading(true);
    try {
        const response = await fetch(URL);
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (setState) setState(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        setLoading(false);
    }
};
