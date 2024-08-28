import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-white.svg';


const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    onUpdateActiveLink(sectionId);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </Nav.Link>
     
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#certificates" 
              className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'certificates')}
            >
              Certificates
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </Nav.Link>

            <Nav.Link 
              href="#contact" 
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button className="vvd" onClick={(e) => handleLinkClick(e, 'contact')}>
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
