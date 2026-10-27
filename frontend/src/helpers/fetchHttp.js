export const fetchHttp = async (url, setState = {}) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (setState) {
            setState(data);
        }
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
