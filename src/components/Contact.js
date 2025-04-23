import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section id="contact" className="contact-section">
                <header className="contact-header">
                    <h2>Contact Me</h2>
                </header>
                <address className="contact-details">
                    <p>If you’d like to get in touch, feel free to reach out via the following:</p>
                    
                    <p>
                        <FiPhone className="contact-icon" />
                        <a href="tel:+918378836245">+91-8378836245</a>
                    </p>
                    
                    <p>
                        <FiMail className="contact-icon" />
                        <a href="mailto:gadadeanjali677@gmail.com">gadadeanjali677@gmail.com</a>
                    </p>
                    
                    <p>
                        <FaLinkedin className="contact-icon" />
                       <a href="https://www.linkedin.com/in/anjali-gadade-5aa628227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </p>
                </address>
            </section>
        </div>
    );
}

export default Contact;
