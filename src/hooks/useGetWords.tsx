import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiWordsRandom from "../interfaces/apiWordsRandom";
import apiWord from "../interfaces/apiWord";

const useGetWords = ( category:string, abc:string ) => {

    let url:string = ""

    if (category !== undefined && abc !== undefined) {
        url = `${process.env.REACT_APP_API_URL}/words/${abc}/${category}` 
    } else if (category !== undefined && abc === undefined) {
        url = `${process.env.REACT_APP_API_URL}/words/${category}/random` 
    } else if (category === undefined && abc !== undefined) {
        url = `${process.env.REACT_APP_API_URL}/words/${abc}/random`
    } else {
        url = `${process.env.REACT_APP_API_URL}/words/random/`
    }

    const [data, setData] = useState<apiWord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
    try {
        const response: AxiosResponse<apiWordsRandom> = await axios.get(url);
        setData(response.data.words);
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    const refetchData = () => {
        setLoading(true);
        fetchData();
    };

    return { data, loading, error, refetchData };
};



export default useGetWords;

