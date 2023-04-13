import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Car from './Components/Portfolio/Car';
import car1 from './Components/Portfolio/Car/images/hero1.png';


function Home() {
    
const carData = 
    {
      id:'1',
      model: 'Benz GLK',
      make: 'Mercedes',
      year: '2006',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Diesel',
      rentPerDay: 37,
      image: car1,
    }

    return (
        <>
            <Hero />
                    <Car
                        model={carData.model}
                        make={carData.make}
                        year={carData.year}
                        doors={carData.doors}
                        ac={carData.ac}
                        transmission={carData.transmission}
                        fuel={carData.fuel}
                        rentPerDay={carData.rentPerDay}
                        image={carData.image}
                    />
            <Footer />
        </>
    )
}

export default Home