import './tag.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Tag() {
    return (
        <div className='Tag-component'>
            <div className='tag'>
                <h1>Book a car by getting in touch with us <span><FontAwesomeIcon icon={faPhone} />(123) 456 7890</span></h1>
            </div>
        </div>
    )
}

export default Tag