import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiWordsRandom from "../interfaces/apiWordsRandom";
import apiWord from "../interfaces/apiWord";

const useGetWords = ( category:string, alphabet:string ) => {

    let url:string = ""

    if (category.length !== 0 && alphabet.length !== 0) {
        url = `${process.env.REACT_APP_API_URL}/words/${alphabet}/${category}/random` 
    } else if (category.length !== 0 && alphabet.length === 0) {
        url = `${process.env.REACT_APP_API_URL}/words/${category}/random` 
    } else if (category.length === 0 && alphabet.length !== 0) {
        url = `${process.env.REACT_APP_API_URL}/words/${alphabet}/random`
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

