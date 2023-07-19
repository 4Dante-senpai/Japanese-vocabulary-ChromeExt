import { useEffect, useRef, useState } from "react";
import useGetWords from "../hooks/useGetWords";
import apiWord from "../interfaces/apiWord";
import apiWordsRandom from "../interfaces/apiWordsRandom";



function DisplayWord() {

    const [indexWord, setIndexWord] = useState<number>(0)
    const [actualWord, setActualWord] = useState<apiWord>()
    const [arrayWords, setArrayWords] = useState<apiWord[]>([])
    const [showActualWord, setShowActualWord] = useState<boolean>(false)
    const [inputValue, setInputValue] =useState<string>("")

    useEffect(() => {
        if (arrayWords.length > 0) {
            console.log('arrayWords', arrayWords)
            setActualWord(arrayWords[indexWord])
        }
    }, [arrayWords.length])

    useEffect(() => {
        console.log('arrayWords', arrayWords)
        setActualWord(arrayWords[indexWord])
    }, [indexWord])

    useEffect(() => {
        if (showActualWord) {

        }
    }, [showActualWord])


    const { data, loading, error } = useGetWords();
    useEffect(() => {
        setArrayWords(data);
    }, [data]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = document.getElementById('validate');
        let chars = event.target.value
        console.log(chars);
        setInputValue(chars)
        for (let i = 0; i < chars.length; i++) {
            if (chars.charAt(i).toUpperCase() === actualWord?.pronunciation.charAt(i).toUpperCase()) {
                console.log('Coninciden los caracteres')
                input?.classList.add('bg-green-400')
                input?.classList.remove('bg-red-400')
                if (chars.length === actualWord?.pronunciation.length) {
                    setShowActualWord(true)
                    console.log('Completatas la palabra!!')
                    // input?.setAttribute("readonly", "")
                    input?.classList.add('pointer-events-none')
                    input?.classList.remove('bg-green-400')
                    input?.classList.add('bg-green-200')
                }
            } else {
                console.log('Errrorrr no coinciden')
                input?.classList.remove('bg-green-400')
                input?.classList.add('bg-red-400')
            }
        }
    };

    const handleSiguiente = () => {
        let auxIndex = indexWord
        setIndexWord(auxIndex+1)
        setShowActualWord(false)
        const input = document.getElementById('validate')
        // const input: HTMLInputElement = document.getElementById('validate')!
        input?.classList.remove('bg-green-400')
        input?.classList.remove('bg-red-400')
        input?.classList.remove('bg-green-200')
        input?.classList.remove('pointer-events-none')
        setInputValue("")
        
    }

    return (
    <div className="displayWord">
        <div> 
            <h4>{actualWord?.kanji}</h4>
            <h4>{actualWord?.phonetics}</h4>
            <input type="text" onChange={handleChange} id="validate" placeholder="Ingrese la pruninciación" value={inputValue}></input>
            {showActualWord ?
                <div> 
                    <p>{actualWord?.spanish}</p> 
                    <p>{actualWord?.english}</p>
                </div>
            : null}
            <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 
                py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                onClick={handleSiguiente}
                
                >
                Siguiente</button>
            
        </div>
    </div>
    );
}

export default DisplayWord;
