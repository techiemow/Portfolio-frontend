import React from 'react';
import './skills.css';
import htmlIcon from '../../assets/documents/html.jpeg';
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
    <div id='skills'>
      <div className='container'>
        <h1 className='skills-heading'>
          <img src={Skill} alt='Skills' /> Skills
        </h1>
        <div className='skills-wrapper'>
          <div className='skills-box'>
            <h2 className='text-center type'>Languages</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                  <img src={jsIcon} alt='JavaScript' />
                </a>
                <p>JavaScript</p>
              </div>
              <div className='skill-item'>
                <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
                  <img src={cssIcon} alt='CSS' />
                </a>
                <p>CSS</p>
              </div>
              <div className='skill-item'>
                <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                  <img src={htmlIcon} alt='HTML' />
                </a>
                <p>HTML</p>
              </div>
              <div className='skill-item'>
                <a href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
                  <img src={cplus} alt='C++' />
                </a>
                <p>C++</p>
              </div>
            </div>
          </div>
          <div className='skills-box'>
            <h2 className='text-center type'>Technologies</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  <img src={nodeIcon} alt='Node.js' />
                </a>
                <p>Node.js</p>
              </div>
              <div className='skill-item'>
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                  <img src={expressIcon} alt='Express' />
                </a>
                <p>Express</p>
              </div>
              <div className='skill-item'>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <img src={reactIcon} alt='React' />
                </a>
                <p>React</p>
              </div>
            </div>
          </div>
          <div className='skills-box'>
            <h2 className='text-center type'>Tools</h2>
            <div className='skills-list'>
              <div className='skill-item'>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img src={mongoIcon} alt='MongoDB' />
                </a>
                <p>MongoDB</p>
              </div>
              <div className='skill-item'>
                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                  <img src={mysqlIcon} alt='MySQL' />
                </a>
                <p>MySQL</p>
              </div>
              <div className='skill-item'>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                  <img src={bootstrap} alt='Bootstrap' />
                </a>
                <p>Bootstrap</p>
              </div>
              <div className='skill-item'>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt='GitHub' />
                </a>
                <p>GitHub</p>
              </div>
              <div className='skill-item'>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt='Git' />
                </a>
                <p>Git</p>
              </div>
              <div className='skill-item'>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                  <img src={tailwind} alt='Tailwind' />
                </a>
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
