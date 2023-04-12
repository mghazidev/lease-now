import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <>
            <div className='Footer-component'>
                <div className='footer'>
                    <div className='section'>
                        <div className='col1'>
                            <h1><b>CAR</b> Rental</h1>
                            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                            <ul>
                                <li><a href='#'><FontAwesomeIcon className='icon1' icon={faPhone} />(123)-456-789</a></li>
                                <li><a href='#'><FontAwesomeIcon className='icon1' icon={faNewspaper} />example@gmail.com</a></li>
                            </ul>
                            <span>Design by XpeedStudio</span>
                        </div>
                        <div className='col1'>
                            <h1><b>COMPANY</b></h1>
                            <ul>
                                <li><a href=''>New York</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''>Mobile</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>How we work</a></li>
                            </ul>
                        </div>
                        <div className='col1'>
                            <h1><b>WORKING HOURS</b></h1>
                            <p>Mon - Fri: 9:00AM - 9:00PM</p>
                            <p>Sat: 9:00 AM - 9:00PM</p>
                            <p>Sun: Closed</p>
                        </div>
                        <div className='col2'>
                            <h1><b>SUBSCRIPTION</b></h1>
                            <p>Subscribe your Email address for latest news & updates.</p>
                        
                                <input placeholder='Enter Email Address'></input>
                                <button className='col-btn'>Submit</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer