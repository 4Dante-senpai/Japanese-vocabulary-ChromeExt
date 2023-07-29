import useGetCategories from "../hooks/useGetCategories";
import "../styles/alerts.css"


const Alerts = ( ) => {

        
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
                <div>
                    <label>
                        <div className="optionContainer">
                            <p>Intervalo</p>
                            <select name="intervalo" id="intervalo" className="m-2">
                                <option value="5m">Cada 5 minutos</option> 
                                <option value="10m">Cada 10 minutos</option> 
                                <option value="15m">Cada 15 minutos</option> 
                                <option value="30m">Cada 30 minutos</option> 
                                <option value="1h">Cada 1 hora</option> 
                                <option value="2h">Cada 2 horas</option> 
                                <option value="3h">Cada 3 horas</option> 
                                <option value="6h">Cada 6 horas</option> 
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

export default Alerts;