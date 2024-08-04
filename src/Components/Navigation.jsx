import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-white.svg';


const Navigation = () => {
    const [activeLink , setactivelink] = useState("home") 
 const [scrolled, setscrolled] = useState(false)

 useEffect(() =>{
   const onScroll = () => {
     const scrollTop = window.scrollY;
     setscrolled(scrollTop > 50 ? true : false);
  
   }
   window.addEventListener('scroll', onScroll);
   return () => window.removeEventListener('scroll', onScroll);
 },[]);

  const onUpdateActiveLink = (link) => {
    setactivelink(link);
  }
  return (
    <Navbar expand="md"  className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#About " className={activeLink === 'About' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About')}>About</Nav.Link>
   
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
        </Nav>
        <span className="navbar-text">
         
          <div to='#connect'>
            <button className="vvd"><span>Let’s Connect</span></button>
          </div>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation