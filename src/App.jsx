import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation';
import About from './Components/About/About';



const App = () => {
    return (
        <>
            <Navigation />
            <Home />
           {/* <About /> */}
        </>
    );
};

export default App;
