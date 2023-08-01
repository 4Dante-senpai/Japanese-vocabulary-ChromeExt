import { Link } from "react-router-dom";
import "../styles/infoButton.css"

const InfoButton = () => {


    return(
    <div>
        <Link to="/info">
            <div className="infoButton">
                <span className="infoIcon">i</span>
            </div>
        </Link>
    </div>
    )

}

export default InfoButton;