import Hero from './Components/Hero';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Application from './Components/Application';
import Footer from './Components/Footer';
import Car from './Components/Portfolio/Car';
import carData from './Components/Portfolio/Car/vehicle';

function Home() {
    return (
        <>
            <Hero />
            {
                carData.map((value, index) => {
                    return <Car
                        key={index}
                        model={value.model}
                        make={value.make}
                        year={value.year}
                        doors={value.doors}
                        ac={value.ac}
                        transmission={value.transmission}
                        fuel={value.fuel}
                        rentPerDay={value.rentPerDay}
                        image={value.image}
                    />
                })
            }
            <Footer />
            
            
        </>
    )
}

export default Home