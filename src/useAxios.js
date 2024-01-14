import { useState, useEffect } from 'react';
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL:  'https://jsonplaceholder.typicode.com/'
});

export const useAxios = (url, method, body = null, headers = null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axiosInstance({
                method: method,
                url: url,
                data: body,
                headers: headers
            });
            setResponse(res.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, method, body, headers]);

    return { response, error, isLoading };
}