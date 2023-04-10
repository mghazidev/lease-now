import './hero.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from 'react';
import slide1 from './images/1.jpg'
import slide2 from './images/2.jpg'
import slide3 from './images/3.jpg'
import slide4 from './images/4.jpg'
import hero1 from './images/hero1.png';

function Hero() {
    const [sliderRef] = useKeenSlider();

    return (
        <div className="hero-container">
            <div className="keen-slider" ref={sliderRef}>
                <div className="keen-slider__slide">
                    <div className='wrapper'>
                        <div className='content'>
                            <span>Automobile Industry</span>
                            <h1>Find the perfect <b>Car</b> for Yourself</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure debitis eveniet excepturi, quod ex sit necessitatibus dolores consequatur dolor delectus rem illo tempora! Ad sequi, quidem animi unde explicabo asperiores dicta autem incidunt, dolore suscipit voluptatibus, perferendis odit quod. Quo repellat minima sint asperiores provident maiores, perspiciatis itaque repudiandae impedit ea quaerat? Corrupti minima vitae debitis cum?</p>
                            <button>
                                Showroom
                            </button>
                        </div>
                        <div className='image'>
                            <img src={hero1} alt= {hero1}></img>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <img src={slide2} alt="Slide 2" />
                </div>
                <div className="keen-slider__slide">
                    <img src={slide3} alt="Slide 3" />
                </div>
                <div className="keen-slider__slide">
                    <img src={slide4} alt="Slide 4" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
