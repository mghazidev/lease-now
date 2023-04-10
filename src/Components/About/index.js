import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import web from './images/about.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
            <div className='about-component'>
                <div className='about'>
                    <div className='column1'>
                        <img src={web} alt={web}></img>
                    </div>
                    <div className='column2'>
                        <h1><span>Specialist</span> in creative digital products</h1>
                        <p>I love IT and I'm fascinated by technology. I'm always seeking to learn and stay updated with industry advancements. My interest in IT showcases my innovation and adaptability <FontAwesomeIcon className='icon' icon={faUser} /> . I love IT and I'm fascinated by technology. <FontAwesomeIcon className='icon' icon={faReact}/> With so many exciting developments on the horizon, the future of technology and IT is truly a fascinating space to keep an eye on.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About