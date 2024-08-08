import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { MdNavigateNext } from 'react-icons/md';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import project1Image from '../../assets/documents/projects/eliteemart.jpeg';
import project2Image from '../../assets/documents/projects/Bus-Booking.jpeg';
import project3Image from '../../assets/documents/projects/hotelbooking.png';
import project4Image from '../../assets/documents/projects/petcare.png';

const projects = [
  {
    title: 'Elite eMart',
    image: project1Image,
    description: 'An e-commerce platform with a variety of products and seamless user experience.',
    website: 'https://eliteemart.com',
    frontend: 'https://github.com/username/eliteemart-frontend',
    backend: 'https://github.com/username/eliteemart-backend',
  },
  {
    title: 'Bus Booking System',
    image: project2Image,
    description: 'A complete bus booking system with real-time seat availability.',
    website: 'https://busbooking.com',
    frontend: 'https://github.com/username/busbooking-frontend',
    backend: 'https://github.com/username/busbooking-backend',
  },
  {
    title: 'Hotel Booking System',
    image: project3Image,
    description: 'An advanced hotel booking system with features like room selection and payment integration.',
    website: 'https://hotelbooking.com',
    frontend: 'https://github.com/username/hotelbooking-frontend',
    backend: 'https://github.com/username/hotelbooking-backend',
  },
  {
    title: 'Pet Care App',
    image: project4Image,
    description: 'An app to book pet care services with easy navigation and user-friendly interface.',
    website: 'https://petcare.com',
    frontend: 'https://github.com/username/petcare-frontend',
    backend: 'https://github.com/username/petcare-backend',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container my-5">
      <h1 className="text-center mb-4 " style={{color:"black"}}>Projects</h1>
      <Carousel
        indicators={false}
        interval={3000}
        pause="hover"
        nextIcon={<GrLinkNext color="black" size={30} />}
        prevIcon={<GrLinkPrevious color="black" size={30} />}
      >
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              <Card style={{ width: '35%', height: '500px', transition: 'transform 0.5s ease' }} className="hover-shadow">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.website} target="_blank" className="mr-2">
                    Website
                  </Button>
                  <Button variant="secondary" href={project.frontend} target="_blank" className="mr-2">
                    Front-end
                  </Button>
                  <Button variant="secondary" href={project.backend} target="_blank">
                    Back-end
                  </Button>
                </Card.Body>
              </Card>
              
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
