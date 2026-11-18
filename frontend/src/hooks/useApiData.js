import { useEffect, useRef, useState } from 'react';

import { fetchHttp } from '../helpers/fetchHttp';

/**
 * Fetches a collection from the API and falls back to sample data when the
 * request fails or the API returns an empty response.
 */
export const useApiData = (endPoint, fallbackData = []) => {
    const [data, setData] = useState(fallbackData);
    const [loading, setLoading] = useState(true);
    const [isFallback, setIsFallback] = useState(false);

    const fallbackRef = useRef(fallbackData);
    fallbackRef.current = fallbackData;

    useEffect(() => {
        let active = true;

        fetchHttp(endPoint, setLoading)
            .then((result) => {
                if (!active) return;
                const items = Array.isArray(result) ? result : [];

                if (items.length > 0) {
                    setData(items);
                    setIsFallback(false);
                } else {
                    setData(fallbackRef.current);
                    setIsFallback(true);
                }
            })
            .catch(() => {
                if (!active) return;
                setData(fallbackRef.current);
                setIsFallback(true);
            });

        return () => {
            active = false;
        };
    }, [endPoint]);

    return { data, loading, isFallback };
};
