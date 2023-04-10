import React from 'react';
import './contact.css';

function Contact() {
    return (
        <>
            <div className='contact-component'>
                <div className='contact'>
                <form className='table' action="send-email.php" method="post">
                            <label for="name">Name:</label> 
                            <input type="text" id="name" name="name" placeholder="Name" required />
                             <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Email" required />
                             <label for="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows= '6' placeholder='Message' required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Contact
