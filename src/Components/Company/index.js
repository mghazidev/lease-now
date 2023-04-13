import './about.css';
import about from './images/Screenshot 2023-04-13 202139.png'
import icon1 from './images/Screenshot 2023-04-13 203006.png';
import icon2 from './images/Screenshot 2023-04-13 202949.png';
import icon3 from './images/Screenshot 2023-04-13 203022.png';

function Company() {
    return (
        <>
            <div className='company-component'>
                <div className='company'>
                    <div className='column'>
                        <img className='about-image' src={about} alt={about}></img>
                    </div>
                    <div className='column'>
                        <h4>About company</h4>
                        <h1>You Start the engine and your adventure begins</h1>
                        <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                        <div className='col3'>
                            <div className='inner'>
                                <img src={icon1} alt={icon1}></img>
                                <h5>20<span>Car<br /> Types</span></h5>
                                
                            </div>
                            <div className='inner'>
                                <img src={icon2} alt={icon2}></img>
                                <h5>85<span>Rental<br /> Outlets</span></h5>
                                
                            </div>
                            <div className='inner'>
                                <img src={icon3} alt={icon3}></img>
                                <h5>75<span>Repair<br /> Shop</span></h5>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company