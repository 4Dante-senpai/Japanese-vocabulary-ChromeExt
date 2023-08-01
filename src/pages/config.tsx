import { Link } from "react-router-dom";
import useGetCategories from "../hooks/useGetCategories";
import "../styles/config.css"
import { useState } from "react";


const Config = ( ) => {

        const [category, setCategory] = useState<string>("")
        const [alphabet, setalphabet] = useState<string>("")
        
        const { data, loading, error } = useGetCategories();
        if (loading) {
            return <div className="loadingContainer"><div className="loadingAnimation"></div></div>
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const handleCategory = () => {
            const selectCategory = document.getElementById('categoryRef') as HTMLSelectElement
            setCategory(selectCategory.value)
        }

        const handleAlphabet = () => {
            const selectCategory = document.getElementById('alphabetRef') as HTMLSelectElement
            setalphabet(selectCategory.value)
        }



        return (
            <div className='Alerts'>
                <div className="tit"></div>
                <h4>¿Qué tipo de palabras quieres recibir?</h4>
                <div className="labelContainer">
                    <label>
                        <div className="optionContainer">
                            <p>Tipo de escritura</p>
                            <select name="writing" className="m-2" id="alphabetRef" onChange={handleAlphabet}>
                                <option value="">Todos</option>
                                <option value="kanji">Kanji</option>
                                <option value="hiragana">Hiragana</option>
                                <option value="katakana">Katakana</option>
                            </select>
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div className="optionContainer">
                            <p>Categoria</p>
                            <select name="categories" className="m-2" id="categoryRef" onChange={handleCategory}>
                                <option value="">Todos</option> 
                                {   data.sort().map((item, index) => (
                                    <option key={index} value={item}>{item[0].toUpperCase() + item.substring(1)}</option>
                            ))}
                            </select>
                        </div>
                    </label>
                </div>

                <div className="boxButtonsConfig">
                    <Link to={"/"}>
                        <button className="cancelButton configButton">
                            Cancelar</button>
                    </Link>
                    <Link to={"/words"} state={ {'category': category, 'alphabet': alphabet}}>
                        <button className="acceptButton configButton">
                            Empezar</button>
                    </Link>
                </div>
            </div>
    )
}

export default Config;