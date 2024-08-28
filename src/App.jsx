import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation';
import About from './Components/About/About';
import EducationTree from './Components/Education/Eduaction';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer';
import ContactForm from './Components/contact/contact';
import GoToTop from './Components/GoToTop';
import Certification from './Components/certification/certification';



const App = () => {
    return (
      <>
            <Navigation />
            <Home />
           <About />
           <EducationTree />
           <Certification />
           
           <Skills/>
           <Projects />
           <Footer/>
           <GoToTop/>
          
          
      </>
    );
};

export default App;
