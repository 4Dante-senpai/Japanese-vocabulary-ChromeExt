import "../styles/home.css"

const Home = ( ) => {
    return (
        <div className='Home'>
            <h1 id="vocabulary-title">Vocabulario</h1>
            <h1>Japonés</h1>
            <button className="startButton">Iniciar</button>
            <button className="startButton">Aleatorio</button>
            <button className="alertsButton">Alertas</button>
            <div className="infoButton">
                <span className="infoIcon">i</span>
            </div>
        </div>
    )
}

export default Home;