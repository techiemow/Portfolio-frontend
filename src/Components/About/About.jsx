import React from 'react';
import styled, { keyframes } from 'styled-components';
import myavatar from "../../assets/img/my-avatar.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

const underline = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50%, 100% {
    transform: translateX(0);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  animation: ${fadeIn} 1s ease-in-out;
  background: #f9f9f9;
  padding: 100px 50px; /* Adjusted padding */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 50px 20px; /* Reduced padding for mobile */
  }
`;

const Content = styled.div`
  max-width: 60%;
  padding-right: 20px;
  animation: ${slideIn} 1s ease-in-out;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
    margin-top: 20px; /* Added margin for better spacing on mobile */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  overflow: hidden;
  font-weight: 700;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #007BFF;
    animation: ${underline} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjusted font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Further adjusted for very small screens */
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjusted font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Further adjusted for very small screens */
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 200px; /* Reduced size for mobile */
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Content>
        <Title>Some Things About Me 🧏‍♂️</Title>
        <Paragraph>
          Hello everyone,

          I am from Trichy, Tamil Nadu, India. I graduated from the University College of Engineering (Anna University - Trichy), where I earned a B.E. degree in Electronics and Electrical Engineering. Although my bachelor's degree is in Electrical Engineering, I have always been fascinated by the field of Information Technology.


        </Paragraph>
        <Paragraph>
          In addition to my formal education, I have enhanced and improved my technical skills by completing a MERN Full-Stack course. I consider myself a constant learner, always striving to expand my knowledge. While I recognize that I still need to improve my skills as a team player, I am dedicated to working in collaborative environments, ensuring seamless coordination and collective success with others.
        </Paragraph>
      </Content>
      <Avatar src={myavatar} alt="Mowriyaa" />
    </AboutContainer>
  );
}

export default About;
