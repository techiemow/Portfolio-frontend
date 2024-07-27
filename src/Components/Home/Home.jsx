import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import porfolio from '../../assets/img/porfolio.jpg'; // Ensure this path is correct
import "./Home.css"
import { Button } from '@mui/material';
import TrackVisibility from 'react-on-screen';

const Home = () => {
  const useTypingEffect = (texts, speed = 150, delay = 2000) => {
    const [currentText, setCurrentText] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(speed);

    useEffect(() => {
      const handleTyping = () => {
        const i = loopNum % texts.length;
        const fullText = texts[i];

        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );

        setTypingSpeed(isDeleting ? speed / 2 : speed);

        if (!isDeleting && currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(delay);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(0);
          setTypingSpeed(speed);
        } else {
          setIndex(index + 1);
        }
      };

      const timer = setTimeout(() => handleTyping(), typingSpeed);

      return () => clearTimeout(timer);
    }, [currentText, isDeleting, typingSpeed, texts, loopNum, index, speed, delay]);

    return currentText;
  };

  const texts = ['Full Stack Developer'];
  const typingText = useTypingEffect(texts);

  return (
    <section className='Home' id='Banner'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={12}>
          <TrackVisibility>
          {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hi I'm Mowriyaa"} <span className='wrap '>{typingText}</span>
            </h1>
            <div className='d-flex '>
            <button onClick={() => console.log('connect')} className='px-5 mx-1'>Let’s Connect <ArrowRightCircle size={25} /></button>
  
            <Button variant='outlined' className='px-5 mx-1' onClick={() => console.log('Resume')}>
              CV <ArrowRightCircle size={25} />
            </Button>
            </div>
            </div>}
            </TrackVisibility>
          </Col>
    
        </Row>
      </Container>
    </section>
  );
};

export default Home;
