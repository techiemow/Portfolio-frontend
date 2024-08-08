import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button onClick={scrollToTop} className={visible ? '' : 'hidden'}>
      <FaArrowUp size={20} />
    </Button>
  );
};

export default GoToTop;
