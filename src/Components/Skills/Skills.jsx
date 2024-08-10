import React from 'react';
import './skills.css';
import htmlIcon from '../../assets/documents/html.jpeg'; // Add the paths to your skill icons
import cssIcon from '../../assets/documents/css.jpeg';
import jsIcon from '../../assets/documents/javascript.png';
import reactIcon from '../../assets/documents/react.png';
import nodeIcon from '../../assets/documents/nodejs.jpeg';
import expressIcon from '../../assets/documents/express.jpeg';
import mongoIcon from '../../assets/documents/mongodb.png';
import mysqlIcon from '../../assets/documents/mysql.png';
import tailwind from '../../assets/documents/tailwind.png';
import git from '../../assets/documents/git.png';
import github from '../../assets/documents/github.jpeg';
import cplus from '../../assets/documents/cplus.png';
import bootstrap from '../../assets/documents/bootstrap.jpeg';
import Skill from "../../assets/img/soft-skills.png";

const Skills = () => {
  return (
    <div id='skills' >
      <div className='container'>
    
      <h1 className=' skills-heading'>
            
        <img src={Skill} alt='Skills' /> Skills </h1>
        <div className='skills-wrapper'>
          <div className='skills-box'>
            <h2 className='text-center type'>Languages</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <img src={jsIcon} alt='JavaScript' />
                <p>JavaScript</p>
              </div>
              <div className='skill-item'>
                <img src={cssIcon} alt='CSS' />
                <p>CSS</p>
              </div>
              <div className='skill-item'>
                <img src={htmlIcon} alt='HTML' />
                <p>HTML</p>
              </div>
              <div className='skill-item'>
                <img src={cplus} alt='C++' />
                <p>C++</p>
              </div>
            </div>
          </div>
          <div className='skills-box'>
            <h2 className='text-center type'>Technologies</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <img src={nodeIcon} alt='Node.js' />
                <p>Node.js</p>
              </div>
              <div className='skill-item'>
                <img src={expressIcon} alt='Express' />
                <p>Express</p>
              </div>
              <div className='skill-item'>
                <img src={reactIcon} alt='React' />
                <p>React</p>
              </div>
            </div>
          </div>
          <div className='skills-box'>
            <h2 className='text-center type'>Tools</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <img src={mongoIcon} alt='MongoDB' />
                <p>MongoDB</p>
              </div>
              <div className='skill-item'>
                <img src={mysqlIcon} alt='MySQL' />
                <p>MySQL</p>
              </div>
              <div className='skill-item'>
                <img src={bootstrap} alt='Bootstrap' />
                <p>Bootstrap</p>
              </div>
              <div className='skill-item'>
                <img src={github} alt='GitHub' />
                <p>GitHub</p>
              </div>
              <div className='skill-item'>
                <img src={git} alt='Git' />
                <p>Git</p>
              </div>
              <div className='skill-item'>
                <img src={tailwind} alt='Tailwind' />
                <p>Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
