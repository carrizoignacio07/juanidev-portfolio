import { useEffect, useState } from 'react';

import { fetchHttp } from '../helpers/fetchHttp';

/**
 * Fetches a collection from the API. It never replaces API results with mock
 * data: failures are exposed as `error` so each page can render its own state.
 * An empty collection is a valid response, not an API failure.
 */
export const useApiData = (endPoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        let active = true;

        setLoading(true);
        setError(null);

        fetchHttp(endPoint, setLoading)
            .then((result) => {
                if (!active) return;
                setData(Array.isArray(result) ? result : []);
            })
            .catch((err) => {
                if (!active) return;
                setData([]);
                setError(err);
            });

        return () => {
            active = false;
        };
    }, [endPoint, reloadKey]);

    return {
        data,
        loading,
        error,
        isUnavailable: Boolean(error),
        reload: () => setReloadKey((key) => key + 1),
    };
};
