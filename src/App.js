import React from 'react';
import './App.css';
import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Education/>
                <Projects />
                <Contact />
            </main>
        
        </div>
    );
}

export default App;
