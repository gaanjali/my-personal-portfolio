import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <header className="Projects-header">
        <h1>PROJECTS</h1>
        <p>"Management is above all, a practice"</p>
      </header>
      <div className="project-cards">
        <div className="project-card">
          <img src="photos/download.png" alt="Web Development" className="project-image" />
          <h2>WEB DEVELOPMENT</h2>
          <p>Collection of interactive web applications using HTML, CSS, and JavaScript.</p>
          <div className="project-details">
           
                <h4><a href="https://numbers-calculation.netlify.app/">Calculator Link</a></h4>
                <p>An online calculator for basic arithmetic operations.</p>
              
                <h4><a href="https://numbers-counter.netlify.app/">Number Counter Link</a></h4>
                <p>A simple counter to increment and decrement numbers.</p>
           
             
                <h4><a href="https://clock-machine.netlify.app/">Digital Clock Link</a></h4>
                <p>A digital clock displaying the current time.</p>
            
            
          </div>
        </div>
        
        <div className="project-card">
          <img src="photos/images.png" alt="Mini React Projects" className="project-image" />
          <h2>MINI REACT PROJECTS</h2>
          <p>Various mini projects built with React, including:</p>
          <div className='project-title'>
          
          <h4><a href="https://commerceplates.netlify.app/">A commerce plates</a></h4>
                <p>Commerce Plates is a sleek and responsive e-commerce website showcasing modern product listings, 
                  shopping cart functionality, and user-friendly navigation built with React and Tailwind CSS.</p>

                  <h4><a href="https://our-ketchen.netlify.app/">Our Kitchen-Cooking with experts</a></h4>
                <p>



Our Kitchen is a recipe-focused website that provides step-by-step cooking instructions, ingredients, and delicious meal ideas in a clean and interactive layout.</p>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
