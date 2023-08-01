import { Link } from 'react-router-dom';
import Icon from "../assets/return-arrow.svg"
import "../styles/returnButton.css"

const ReturnButton = ( ) => {
    return (
        <div>
            <Link to={'/'}>
                <div className='returnButton'>
                <img src={Icon} alt='returnButton' />
                </div>
            </Link>
            
        </div>
    )
}

export default ReturnButton;