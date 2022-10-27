import {useEffect, useState} from "react";

/*
export const useRequest = (request) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        request()
            .then(response => setData(response.data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, error]
}

*/


export const useRequest = (request) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        request()
            .then(response => setData(response.data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [])

    return [data, error, isLoading]

}