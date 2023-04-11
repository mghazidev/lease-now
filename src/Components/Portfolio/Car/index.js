import './car.css'
import car from './images/hero1.png';

function Car() {
    return (
        <>
            <div className='Car-component'>
                <div className='car-listing'>
                    <div className='head'>
                        <h2>Vehicle Models</h2>
                        <h1>Our rental fleet</h1>
                        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className='listing'>
                        <div className='models'>
                            <ul>
                                <li><a href=''>Toyota</a></li>
                                <li><a href=''>Honda</a></li>
                                <li><a href=''>Mercedes</a></li>
                                <li><a href=''>Audi</a></li>
                                <li><a href=''>Suzuki</a></li>
                                <li><a href=''>Bugatti</a></li>
                            </ul>
                        </div>
                        <div className='car-image'>
                                <img src={car}></img>
                        </div>
                        <div className='specification'>
                            <div className='rent'>
                            <span>  $50 / rent per day </span>
                            </div>
                            <div className='details'>
                                <ul className='col'>
                                    <li>Model</li>
                                    |
                                    <li>Benz GLK</li>
                                </ul>
                                <ul className='col'>
                                    <li>Mark</li>
                                    |
                                    <li>Mercedes</li>
                                </ul>
                                <ul className='col'>
                                    <li>Year</li>
                                    |
                                    <li>2006</li>
                                </ul>
                                <ul className='col'>
                                    <li>Doors</li>
                                    |
                                    <li>4/5</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>AC</li>
                                    |
                                    <li>Yes</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>Transmission</li>
                                    |
                                    <li>Manual</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>Fuel</li>
                                    |
                                    <li>Diesel</li>
                                </ul>
                            </div>
                        <button className='btn'>
                            RESERVE NOW
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Car