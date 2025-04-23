import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <header className="about-header">
                <h2>About Me</h2>
            </header>
            <div className="about-content">
                <p>Hello! My name is Gadade Anjali, and I am a web developer based in Latur. I have a passion for creating beautiful and functional websites, specializing in front-end development.</p>
                <p>I am currently pursuing a BCA degree at Swami Ramanand Teerth Marathwada University - Nanded. Over the years, I've worked on various projects that have honed my skills in HTML, CSS, JavaScript, and React.js.</p>
                <p>In my free time, I love exploring new technologies and learning new things. I believe in continuous learning and improvement, and I am dedicated to delivering high-quality work. </p>

                <div className="internship-section">
                    <h3>Internship Experience</h3>
                    <div className="internship-detail">
                        <h4>Web Development Intern</h4>
                        <p><strong>Binary Raptor Technologies LLP</strong></p>
                        <p><strong>Duration:</strong> 8-January to 8-July</p>
                        <p>During my internship at Binary Bridges Technologies, I had the invaluable opportunity to apply my skills in a real-world environment. My role primarily focused on front-end development, where I worked closely with a talented team of developers and designers to enhance various web projects.</p>
                        <p><strong>Key Responsibilities:</strong></p>
                        <ul>
                            <li>Collaborating with the design team to implement responsive and user-friendly web interfaces.</li>
                            <li>Developing and maintaining web applications using HTML, CSS, JavaScript, and React.js.</li>
                            <li>Debugging and optimizing code to improve performance and user experience.</li>
                            <li>Participating in code reviews and contributing to team meetings.</li>
                        </ul>
                        <p>This internship was a significant step in my professional growth, allowing me to bridge the gap between academic learning and practical application. It provided me with hands-on experience in a collaborative environment and deepened my understanding of the web development lifecycle.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
