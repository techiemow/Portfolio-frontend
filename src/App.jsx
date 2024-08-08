import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation';
import About from './Components/About/About';
import EducationTree from './Components/Education/Eduaction';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer';



const App = () => {
    return (
      <>
            <Navigation />
            <Home />
           <About />
           <EducationTree />
           <Skills/>
           <Projects />
           <Footer/>
          
      </>
    );
};

export default App;
