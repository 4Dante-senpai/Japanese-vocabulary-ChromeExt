import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetWords from "../hooks/useGetWords";
import apiWord from "../interfaces/apiWord";
import "../styles/words.css"
import ReturnButton from "../components/ReturnButton";
import LoadingFetch from "../components/LoadingFetch";
import ErrorFetch from "../components/ErrorFetch";



function Words() {
    const [indexWord, setIndexWord] = useState<number>(0)
    const [actualWord, setActualWord] = useState<apiWord>()
    const [arrayWords, setArrayWords] = useState<apiWord[]>([])
    const [showActualWord, setShowActualWord] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")
    const location = useLocation();
    const state = location.state;

    const { data, loading, error, refetchData } = useGetWords(state.category , state.alphabet);
    useEffect(() => {
        setArrayWords(data);
    }, [data]);
    const handleRefetchData = () => {
        refetchData();
    };


    useEffect(() => {
        if (arrayWords.length > 0) {
            setActualWord(arrayWords[indexWord])
        }
    }, [arrayWords.length])

    useEffect(() =>{
        console.log('error', error)
        if (actualWord !== undefined && !loading) {
            if (state.alphabet === 'hiragana') {
                    document.getElementById('spanPhonetics')?.classList.remove('needBlur')
                    document.getElementById('meaningHoverKanji')!.style.display = "none"
            }
        }
    }, [actualWord])

    useEffect(() => {
        // This handle the first refetch for higarana alphabet selection
        if (!loading && state.alphabet === 'hiragana' && !error) {
            document.getElementById('spanPhonetics')?.classList.remove('needBlur')
            document.getElementById('meaningHoverKanji')!.style.display = "none"
        }

    }, [loading])

    useEffect(() => {
        if (indexWord < arrayWords.length) {
            setActualWord(arrayWords[indexWord])
        } else {
            handleRefetchData()
            setIndexWord(0)
        }
    }, [indexWord])

    useEffect(() => {

        if (showActualWord) {
            const phonetic =  document.getElementById('spanPhonetics') as HTMLElement;
            const category = document.getElementById('meaningCategory') as HTMLElement;
            const spanish = document.getElementById('meaningSpanish') as HTMLElement;
            phonetic.classList.remove('needBlur')
            category.classList.remove('needBlur')
            spanish.classList.remove('needBlur')
            document.getElementById('meaningHoverKanji')!.style.display = "none"
            document.getElementById('meaningHoverCategory')!.style.display = "none"
            document.getElementById('meaningHoverSpanish')!.style.display = "none"
        }
    }, [showActualWord])
    


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = document.getElementById('validate') as HTMLInputElement;
        let chars = event.target.value
        setInputValue(chars)
        for (let i = 0; i < chars.length; i++) {
            if (chars.charAt(i).toUpperCase() === actualWord?.pronunciation.charAt(i).toUpperCase()) {
                input.style.backgroundColor = "#9aedbe";
            } else {
                input.style.backgroundColor = "#eda79a";
                break
            }
        if (chars.toLocaleUpperCase() === actualWord?.pronunciation.toLocaleUpperCase()) {
            setShowActualWord(true)
            input.style.pointerEvents = "none"
            input?.setAttribute("readonly", "")
            }
        }
    };

    const handleSiguiente = () => {
        const input = document.getElementById('validate') as HTMLInputElement;
        const phonetic =  document.getElementById('spanPhonetics') as HTMLElement;
        const category = document.getElementById('meaningCategory') as HTMLElement;
        const spanish = document.getElementById('meaningSpanish') as HTMLElement;
        const phoneticHover = document.getElementById('meaningHoverKanji') as HTMLElement;
        const categoryHover = document.getElementById('meaningHoverCategory') as HTMLElement;
        const spanishHover = document.getElementById('meaningHoverSpanish') as HTMLElement;

        if (showActualWord) {
            let auxIndex = indexWord
            setIndexWord(auxIndex+1)
            setShowActualWord(false)
            if (actualWord?.kanji){
                phonetic.classList.add('needBlur')
                phoneticHover.style.display = "block"
            } else {
                phonetic.classList.remove('needBlur')
                phoneticHover.style.display = "none"
            }
            category.classList.add('needBlur')
            spanish.classList.add('needBlur')
            input.style.backgroundColor = "#fff";
            input.style.pointerEvents = "all"
            input?.removeAttribute("readonly")
            categoryHover.style.display = "block"
            spanishHover.style.display = "block"
            setInputValue("")
        } else {
            setInputValue(actualWord?.pronunciation!)
            setShowActualWord(true)
            input.style.backgroundColor = "#9aedbe";
            input.style.pointerEvents = "none"
            input?.setAttribute("readonly", "")
            phonetic.classList.remove('needBlur')
            category.classList.remove('needBlur')
            spanish.classList.remove('needBlur')
            phoneticHover.style.display = "none"
            categoryHover.style.display = "none"
            spanishHover.style.display = "none"
        }
    }

    if (loading) {
        return <LoadingFetch />
    }
    if (error) {
        return <ErrorFetch err={error} alphabet={state.alphabet} category={state.category} />
    }

    return (
    <div className="words">
        <ReturnButton />
        <div className="wordInfo"> 
            <h1>¿Qué palabra es?</h1>
            {actualWord?.kanji ? (<h4>Kanji: {actualWord?.kanji}</h4>) : (<h4>Kanji: No tiene</h4>)}
            <div className="wordPropsKanji">
                <h4>Fonética:</h4>
                <div className="wordWrapKanji">
                    <h4 id="spanPhonetics" className={actualWord?.kanji ? 'needBlur': ""}
                    >{actualWord?.phonetics}</h4>
                    { actualWord?.kanji ? 
                    
                        <p className="meanings meaningHover" id="meaningHoverKanji"
                        onClick={() => {document.getElementById('spanPhonetics')?.classList.remove('needBlur')
                                        document.getElementById('meaningHoverKanji')!.style.display = "none"}}
                        >Ver</p>
                    : <p className="meanings" id="meaningHoverKanji" style={{display : "none"}}>Ver</p> }
                </div>
            </div>
            <input type="text" onChange={handleChange} id="validate" placeholder="Ingrese la pronunciación" value={inputValue}></input>
            <div className="wordTranslations">
                <div className="wordsPropsLeft">
                        <p className="specs">Categoría:</p> 
                        <p className="specs">Significado:</p>
                    </div>
                    <div className="wordsPropsRight">
                        <div className="wordWrapCategory">
                            <p className="meanings needBlur" id="meaningCategory">{`${actualWord?.category_spanish[0].toUpperCase()!}${actualWord?.category_spanish.substring(1)!}`}</p>
                            <p className="meanings meaningHover" id="meaningHoverCategory"
                            onClick={() => {document.getElementById('meaningCategory')?.classList.remove('needBlur')
                                            document.getElementById('meaningHoverCategory')!.style.display = "none"}}
                            >Ver</p>
                        </div>

                        <div className="wordWrapSpanish">
                            <p className="meanings needBlur" id="meaningSpanish" >{actualWord?.spanish}</p>
                            <p className="meanings meaningHover" id="meaningHoverSpanish"
                            onClick={() => {document.getElementById('meaningSpanish')?.classList.remove('needBlur');
                                            document.getElementById('meaningHoverSpanish')!.style.display = "none"}}
                            >Ver</p>
                        </div>
                    </div>
                </div>
            <button className="nextButton" onClick={handleSiguiente}>
                {showActualWord ? 'Siguiente' : 'Autocompletar'}
            </button>
        </div>
    </div>
    );
}

export default Words;
