import Hero from './Components/Hero';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Application from './Components/Application';
import Footer from './Components/Footer';
import Car from './Components/Portfolio/Car';

function Home() {
    return(
        <>
            <Hero />
            <Car />
            <About />
            
            <Portfolio />
            <Application />
            
            <Footer />

        </>
    )
}

export default Home