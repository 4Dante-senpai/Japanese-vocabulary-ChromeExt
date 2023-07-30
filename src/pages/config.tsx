import useGetCategories from "../hooks/useGetCategories";
import "../styles/alerts.css"


const Config = ( ) => {

        
        const { data, loading, error } = useGetCategories();
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }


        return (
            <div className='Alerts'>
                <div className="tit"></div>
                <h4>¿Qué tipo de palabras quieres recibir?</h4>
                <div className="labelContainer">
                    <label>
                        <div className="optionContainer">
                            <p>Tipo de escritura</p>
                            <select name="writing" className="m-2">
                                <option value="all">Todos</option>
                                <option value="kanji">Kanji</option>
                                <option value="higarana">Higarana</option>
                                <option value="katakana">Katakana</option>
                            </select>
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div className="optionContainer">
                            <p>Categoria</p>
                            <select name="categories" id="categories" className="m-2">
                                <option value="all">Todos</option> 
                                {   data.sort().map((item, index) => (
                                    <option key={index} value={item}>{item[0].toUpperCase() + item.substring(1)}</option>
                            ))}
                            </select>
                        </div>
                    </label>
                </div>

                <div className="boxButtons">
                    <button className="acceptButton">
                        Guardar</button>
                    <button className="cancelButton">
                        Cancelar</button>
                </div>
            </div>
    )
}

export default Config;