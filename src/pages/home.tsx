import InfoButton from "../components/InfoButton";
import "../styles/home.css"
import { Link } from "react-router-dom";

const Home = ( ) => {
    return (
        <div className='Home'>
            <h1 id="vocabulary-title">Vocabulario</h1>
            <h1>Japonés</h1>
            <Link to="/config">
                <button className="startButton homeButton">Iniciar</button>
            </Link>
            <Link to="/words" state={ {'category': '', 'alphabet': ''} }>
                <button className="startButton homeButton">Aleatorio</button>
            </Link>
            <Link to="/alers">
                <button className="alertsButton homeButton">Alertas</button>
            </Link>
            <InfoButton />
        </div>
    )
}

export default Home;