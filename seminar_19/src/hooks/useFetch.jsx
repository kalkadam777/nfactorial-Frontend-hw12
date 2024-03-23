import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const fetchData = () => {
        axios.get(url).then((res) => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 5000);
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
            setError(true)
        });
    }
    
    useEffect(() => {
        fetchData()
    },[])

    return {
        data,
        isLoading,
        isError,
        refetch: fetchData
    }
}

export default useFetch;
