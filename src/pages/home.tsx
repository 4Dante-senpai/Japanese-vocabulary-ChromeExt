import "../styles/home.css"

const Home = ( ) => {
    return (
        <div className='Home'>
            <h1>Vocabulario Japonés</h1>
            <button className="startButton">Iniciar</button>
            <button className="alertsButton">Alertas</button>
            <div className="infoButton">
                <span className="infoIcon">i</span>
            </div>
        </div>
    )
}

export default Home;