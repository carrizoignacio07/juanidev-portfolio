import { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollButton = () => {
    const buttonRef = useRef(null);
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <button
            className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600"
            ref={buttonRef}
            onClick={handleScroll}
        >
            <FaArrowUp />
        </button>
    );
};
