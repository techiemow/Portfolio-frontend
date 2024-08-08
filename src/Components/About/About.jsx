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
  padding: 200px 100px; /* Adjusted for more vertical space */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  // margin: 40px 0; /* Added margin to give space above and below the container */
`;

const Content = styled.div`
  max-width: 60%;
  padding-right: 20px;
  animation: ${slideIn} 1s ease-in-out;
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
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
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
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Content>
        <Title>Some Things About Me 🧏‍♂️</Title>
        <Paragraph>
          I am a graduate from the University College of Engineering (Anna University-Trichy), where I earned a B.E. degree in Electronics and Electrical Engineering. Although my bachelor's degree is in Electrical, I have always been fascinated by the field of Information Technology.
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
