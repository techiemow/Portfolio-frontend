import React from 'react';
import educationData from './education';
import "./education.css";

const EducationTree = () => {
  // Flatten the education data into a single array for display
  const timelineItems = [
    {
      title: educationData[0].college.Institute,
      date: `${educationData[0].college.year}`,
      description: `${educationData[0].college.degree} in ${educationData[0].college.branch}, CGPA: ${educationData[0].college.CGPA}`
    },
    {
      title: educationData[0].HSC.school,
      date: `${educationData[0].HSC.year}`,
      description: `${educationData[0].HSC.branch}, Percentage: ${educationData[0].HSC.percentage}`
    },
    {
      title: educationData[0].SSLC.school,
      date: `${educationData[0].SSLC.year}`,
      description: `Percentage: ${educationData[0].SSLC.percentage}`
    }
  ];

  return (
    <article className="resume py-5" id='Resume' data-page="resume">
      <div className='d-flex justify-content-center'>
        <h3 className="h3">
          <span className="material-symbols-outlined">school</span>Education
        </h3>
      </div>
      <div className='timeline'>
        {timelineItems.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className='box'>
              <h4>{item.title}</h4>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
        
          </div>
        ))}
      </div>
    </article>
  );
}

export default EducationTree;
