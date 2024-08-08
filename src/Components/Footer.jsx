import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  justify-content: center;
  gap: 20px;
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

const Footer = () => {
  return (
    <FooterContainer>
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
          <ContactItem>mowriyaabk@gmail.com</ContactItem>
          <ContactItem>Trichy, Tamil Nadu, India</ContactItem>
        </ContactInfo>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
