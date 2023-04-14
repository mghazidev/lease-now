import React from 'react';
import './contact.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


function Contact() {
    return (
        <>
            <div className='contact-component'>
                <div className='contact'>
                    <div className='info'>
                        <h2>Need additional information? </h2>
                        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                        <div className='information'>
                        <p>(123) 456-7869</p>
                        <p>carrental@carmail.com</p>
                        <p>Belgrade, Serbia</p>
                        </div>
                    </div>
                    <div className='info'>
                        <form className='table'>
                            <label for="name">Full Name:</label>
                            <input type="text" id="name" name="name" placeholder="E:g: Example" required />
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="youremail@gmail.com" required />
                            <label for="message">Tell us about it</label>
                            <textarea id="message" name="message" rows='6' placeholder='Write here' required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
