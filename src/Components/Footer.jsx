import React from 'react';
import { FaMapLocation } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';
import ContactForm from './contact/contact';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled-components for footer
const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
`;

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FooterContent = styled.div`
  max-width: 45%;
  animation: ${slideUp} 1s ease-in-out;
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #FFD700; /* Gold color for the title */
`;

const FooterText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #ddd;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const QuickLink = styled.a`
  color: #FFD700;
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fff;
  }
  
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #FFD700;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin: 5px 0;
`;

const FormWrapper = styled.div`
  max-width: 45%;
  animation: ${slideUp} 1s ease-in-out;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <FooterContent>
          <FooterTitle>Mowriyaa's Portfolio</FooterTitle>
          <FooterText>Thank you for visiting my personal portfolio website. Connect with me over socials.</FooterText>

          <QuickLinks>
            <QuickLink href="#home">Home</QuickLink>
            <QuickLink href="#about">About</QuickLink>
            <QuickLink href="#skills">Skills</QuickLink>
            <QuickLink href="#projects">Projects</QuickLink>
            <QuickLink href="#education">Education</QuickLink>
            <QuickLink href="#contacts">Contacts</QuickLink>
          </QuickLinks>
          <ContactInfo>
            <ContactItem><MdEmail /> mowriyaabk@gmail.com</ContactItem>
            <ContactItem><FaMapLocation /> Trichy, Tamil Nadu, India</ContactItem>
          </ContactInfo>
        </FooterContent>
        <FormWrapper>
          <ContactForm />
        </FormWrapper>
      </FooterContentWrapper>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#333', padding: '10px', color: '#fff', textAlign: 'center' }}>
         © 2024 Mowriyaa. All rights reserved.  |  Designed and developed by <a href="https://www.linkedin.com/in/mowriyaabk/" target="_blank" rel="noopener noreferrer">Mowriyaa</a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
