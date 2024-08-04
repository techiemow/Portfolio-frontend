import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation';
import About from './Components/About/About';



const App = () => {
    return (
       <div className='container'>
            <Navigation />
            <Home />
           <About />
          
           </div>
    );
};

export default App;
