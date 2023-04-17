import './Components/Portfolio/Car/'
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import { useState } from 'react';
import Car from './Components/Portfolio/Car';
import car1 from './Components/Portfolio/Car/images/hero1.png';
import Tag from './Components/Tag';

const carList = [
    {
      id: '1',
      model: 'Benz GLK',
      make: 'Mercedes',
      year: '2006',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Diesel',
      rentPerDay: 37,
      image: car1,
    },
    {
      id: '2',
      model: 'Mercedes',
      make: '2000c',
      year: '2008',
      doors: '4/3',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
      rentPerDay: 50,
      image: car1,
    },
    {
      id: '3',
      model: 'Toyota',
      make: 'Toyota Corolla',
      year: '2015',
      doors: '4/7',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
      rentPerDay: 27,
      image: car1,
    },
    {
      id: '4',
      model: 'Civic',
      make: 'Honda',
      year: '2020',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Petrol',
      rentPerDay: 17,
      image: car1,
    },
    {
      id: '5',
      model: 'Suzuki GLs',
      make: 'Swift',
      year: '2022',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
      rentPerDay: 32,
      image: car1,
    },
    {
      id: '6',
      model: 'Kia',
      make: 'Picanto',
      year: '2019',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Auto',
      fuel: 'Petrol',
      rentPerDay: 15,
      image: car1,
    },
    // Add other car models and their specs here
  ];

function Home() {
    const [selectedModel, setSelectedModel] = useState(carList[0].model);
    function handleModelButtonClick(model) {
        setSelectedModel(model);
      }
      const carData = carList.find((car) => car.model === selectedModel);
  return (
    <>
      <Hero />
      <div className='Car-component'>
      <div className='car-listing'>
        <div className='listing'>
          <div className='models'>
            <ul>
              {carList.map((car) => (
                <li key={car.id}>
                  <button onClick={() => handleModelButtonClick(car.model)}>
                    {car.model}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
      </div>
      
      </div>
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
      <Tag />
      <Footer />
    </>
  );
}

export default Home;


// import Hero from './Components/Hero';
// import Footer from './Components/Footer';
// import Car from './Components/Portfolio/Car';
// import car1 from './Components/Portfolio/Car/images/hero1.png';
// import Tag from './Components/Tag';


// function Home() {
    
// const carData = 
//     {
//       id:'1',
//       model: 'Benz GLK',
//       make: 'Mercedes',
//       year: '2006',
//       doors: '4/5',
//       ac: 'Yes',
//       transmission: 'Manual',
//       fuel: 'Diesel',
//       rentPerDay: 37,
//       image: car1,
//     }

//     return (
//         <>
//             <Hero />
//                     <Car
//                         model={carData.model}
//                         make={carData.make}
//                         year={carData.year}
//                         doors={carData.doors}
//                         ac={carData.ac}
//                         transmission={carData.transmission}
//                         fuel={carData.fuel}
//                         rentPerDay={carData.rentPerDay}
//                         image={carData.image}
//                     />
//                     <Tag />
//             <Footer />
//         </>
//     )
// }

// export default Home