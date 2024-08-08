import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import project1Image from '../../assets/documents/projects/emart3.png';
import project2Image from '../../assets/documents/projects/busbooking.jpg';
import project3Image from '../../assets/documents/projects/hotelbooking.png';
import project4Image from '../../assets/documents/projects/pet3.jpeg';
import project from "../../assets/documents/projects/project.png"

const projects = [
  {
    title: 'Elite eMart',
    image: project1Image,
    description: 'An e-store platform with a variety of electronic products, including the latest gadgets and accessories, offering a seamless user experience and a wide range of options to choose from.',
    website: 'https://eliteemart.com',
    frontend: 'https://github.com/techiemow/Elite-Emart',
    backend: 'https://github.com/techiemow/Elite-Emart-Backend',
  },
  {
    title: 'Bus Booking System',
    image: project2Image,
    description: 'A complete bus booking system with real-time seat availability, allowing users to book their tickets effortlessly, view schedules, and manage their bookings with ease.',
    website: 'https://busbooking.com',
    frontend: 'https://github.com/techiemow/Bus-Booking-frontend',
    backend: 'https://github.com/techiemow/Bus-Booking-Backend',
  },
  {
    title: 'BookHaven',
    image: project3Image,
    description: 'An advanced hotel booking system with features like integrated payment solutions, detailed room descriptions, and user reviews, making it easy to find and book the perfect stay.',
    website: 'https://hotelbooking.com',
    frontend: 'https://github.com/techiemow/Hotel-Booking-FE',
    backend: 'https://github.com/techiemow/Hotel-Booking-BE',
  },
  {
    title: 'Paws and Claws App',
    image: project4Image,
    description: 'An app designed for booking pet care services, featuring easy navigation, a user-friendly interface, and various service options for pet grooming, boarding, and more.',
    website: 'https://petcare.com',
    frontend: 'https://github.com/techiemow/Pet-sitting-app-Frontend',
    backend: 'https://github.com/techiemow/Pet-Sitting-app',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container my-5 p-5">
      <h1 className='skills-heading text-center mb-4' style={{ color: "black" }}>
        <img src={project} alt='Skills' /> Projects
      </h1>
      <Carousel
        indicators={false}
        interval={3000}
        pause="hover"
        nextIcon={<GrLinkNext color="black" size={30} />}
        prevIcon={<GrLinkPrevious color="black" size={30} />}
      >
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center p-3 flex-wrap">
              <Card
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px',
                }}
                className="hover-shadow"
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: 'auto', maxHeight: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ height: 'auto', maxHeight: '100px', overflow: 'hidden' }}>
                    {project.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between flex-wrap">
                    <Button
                      variant="primary"
                      href={project.website}
                      target="_blank"
                      className="mr-2"
                      style={{ marginRight: '8px', marginBottom: '10px' }}
                    >
                      Website
                    </Button>
                    <Button
                      variant="secondary"
                      href={project.frontend}
                      target="_blank"
                      className="mr-2"
                      style={{ marginRight: '8px', marginBottom: '10px' }}
                    >
                      Front-end
                    </Button>
                    <Button
                      variant="secondary"
                      href={project.backend}
                      target="_blank"
                      style={{ marginBottom: '10px' }}
                    >
                      Back-end
                    </Button>
                  </div>
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
