import { useEffect, useState } from 'react';
import { ThanksContext } from './ThanksContext';

export const ThanksProvider = ({ children }) => {
    const [thanks, setThanks] = useState([]);

    const fetchThanks = async () => {
        const response = await fetch(
            'https://backend-juanidev-portfolio.vercel.app/api/thanks'
        );
        const data = await response.json();
        setThanks(data);
    };

    useEffect(() => {
        fetchThanks();
    }, []);

    return (
        <ThanksContext.Provider value={{ thanks }}>
            {children}
        </ThanksContext.Provider>
    );
};
