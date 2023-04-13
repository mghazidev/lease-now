import './car.css'

function Car(props) {
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
                            <ul><li><button>Toyota</button></li>
                                <li><button>Honda</button></li>
                                <li><button>Mercedes</button></li>
                                <li><button>Audi</button></li>
                                <li><button>Suzuki</button></li>
                                <li><button>Bugatti</button></li> 
                            </ul>
                        </div>
                        <div className='car-image'>
                                <img src={props.image} alt={props.image}></img>
                        </div>
                        <div className='specification'>
                            <div className='rent'>
                            <span>  ${props.rentPerDay} / rent per day </span>
                            </div>
                            <div className='details'>
                                <ul className='col'>
                                    <li>Model</li>
                                    |
                                    <li>{props.model}</li>
                                </ul>
                                <ul className='col'>
                                    <li>Mark</li>
                                    |
                                    <li>{props.make}</li>
                                </ul>
                                <ul className='col'>
                                    <li>Year</li>
                                    |
                                    <li>{props.year}</li>
                                </ul>
                                <ul className='col'>
                                    <li>Doors</li>
                                    |
                                    <li>{props.doors}</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>AC</li>
                                    |
                                    <li>{props.ac}</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>Transmission</li>
                                    |
                                    <li>{props.transmission}</li>
                                </ul>
                                
                                <ul className='col'>
                                    <li>Fuel</li>
                                    |
                                    <li>{props.fuel}</li>
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