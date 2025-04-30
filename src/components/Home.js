import React from 'react';
import './Home.css';
//import profileImage from '../assets/profile.jpg'; // Ensure you have a profile image in the assets folder
//photos\WhatsApp Image 2024-07-30 at 7.39.10 PM.jpeg  image path professional photo
const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h4>Hello</h4>
                    <h1>I'm <span>Anjali</span></h1>
                    <h2>a Web Developer</h2>
                    <p>
                        Welcome to my web developer portfolio! I'm Anjali, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects.
                    </p>
                    
                    { 
                    
                    //<div className="home-buttons">
                       // <a href="#about" className="btn hire-me">About Me</a>
                   // </div>
                     }
                </div>
                <div className="home-image">
                    <img src="photos\WhatsApp Image 2024-07-30 at 7.39.10 PM.jpeg" alt="Anjali" />
                </div>
            </div>
        </section>
    );
}

export default Home;
