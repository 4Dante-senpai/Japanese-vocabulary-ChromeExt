import {ReactComponent as ReturnArrow} from '../assets/return-arrow.svg';
import { Link } from 'react-router-dom';
import "../styles/returnButton.css"

const ReturnButton = ( ) => {
    return (
        <div className='returnButton'>
            <Link to={'/'}>
                <ReturnArrow />
            </Link>
        </div>
    )
}

export default ReturnButton;