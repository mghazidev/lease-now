import './application.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phone from './images/phone.png'

function Application() {
    return (
        <>
            <div className='application-component'>
                <div className='application'>
                    <div className='wrap-1'>
                        <p>IOS Developer</p>
                        <h1>Nurse<br></br> CE club</h1>
                    </div>
                    <div className='wrap-2'>
                        <div className='wrap'>
                            <p>IOS Developer</p>
                            <h1>CNA<br></br> CEU</h1>
                        </div>
                        <div className='mob'>
                            <img src={phone} alt={phone}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application