export const fetchHttp = async (endPoint, setLoading, setState) => {
    const URL = `https://backend-juanidev-portfolio.vercel.app/api/${endPoint}`;
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
