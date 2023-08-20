import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiCategories from "../interfaces/apiCategories";

const useGetCategories = () => {
    const url = `${process.env.REACT_APP_API_URL}/categories_spanish/`


    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response: AxiosResponse<apiCategories> = await axios.get(url);
            setData(response.data.categories);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useGetCategories;

