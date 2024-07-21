import { Link } from 'react-router-dom';
import './AboutMe.css';
import MyProfile from '../assets/baw1.png';
import React from 'react'
import CV from '../assets/MyResume.pdf';

const AboutMe = () => {
  return (
    <div className='about-title'>
      <h1>About <span style={{color:'yellow'}}>Me</span></h1>
      <div className='about'>
      <div className='left'>
            <div className='project-card about-img'>
                <img src={MyProfile} alt='image'/>
            </div>
      </div>

      <div className='right'>
         
        <div className='project-card about-me'>
                  <div className='proj-details'>
                    <p className='about-text'>Hello, I'm Dishank Girase, an aspiring software developer. Armed with a B.Tech from R. C. Patel Institute of Technology, I bring proficiency in full stack development. <br></br><br></br>
                      Eager to contribute innovative solutions, I've honed my skills through hands-on projects, showcasing my passion for technology. Ready to embark on a journey of growth, I seek opportunities to make a meaningful impact in the dynamic world of software development.</p>
                      <b className='about-text about-text-title'>Programming Skills : - </b>
                      <p className='about-text'>Java, Python, JavaScript.</p>
                      <b className='about-text about-text-title'>development Skills : -</b> 
                      <p className='about-text'>HTML/CSS, BootStrap, React.js, MySQL, MongoDB.</p>

                </div>
            </div>
          <a href={CV} download='My Resume' className='btn'>Download Resume</a>
      </div>
      </div>
    </div>
  )
}

export default AboutMe