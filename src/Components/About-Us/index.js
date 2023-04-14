import './about-us.css';
import article1 from './images/artcle1.png'
import article2 from './images/article2.png'
import article3 from './images/article3.png'

function Team(props) {
    return (
        <>
            <div className='About-Us-component'>
                <div className='Compo'>
                    <div className='upper'>
                        <h3>Plan Your Trip now</h3>
                        <h1>Quick & easy car rental</h1>
                    </div>
                    <div className='article'>
                        <div className='card'>
                            <img src={article1} alt={article1}></img>
                            <h2>Select Car</h2>
                            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                        </div>
                        <div className='card'>
                            <img src={article2} alt={article2}></img>
                            <h2>Contact Operator</h2>
                            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                        </div>
                        <div className='card'>
                            <img src={article3} alt={article3}></img>
                            <h2>SLets Drive</h2>
                            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team