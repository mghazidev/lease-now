import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import footer from './images/footer.png';

function Footer() {
    return (
        <>
            <div className='footer-component'>
                <div className='footer'>
                    <img src={footer} alt={footer}></img>
                    <h1>Having <br></br> a great idea?</h1>
                    <div className='footer-links'>
                        <a href='https://www.linkedin.com/in/mghazidev/'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                        <a href='https://github.com/mghazidev'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer