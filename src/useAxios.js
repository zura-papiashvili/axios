import { useState, useEffect } from 'react';
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL:  'http://[::1]:3000/',
});

export const useAxios = (url, method, body = null, headers = null) => {
    console.log(url, method, body, headers)
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
            console.log('ssss',res.data)
            setResponse(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log('error')
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, method, body, headers]);

    return { response, error, isLoading };
}