import './Heroimg.css';
import React from 'react'
import IntroImg from '../assets/bg2.avif'
import {Typewriter, usetypewriter, Cursor} from 'react-simple-typewriter';
import {Link} from 'react-router-dom';
import CV from '../assets/MyResume.pdf';



const Heroimg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='intro-img'
        src={IntroImg} alt='IntroImg'/>
        <div className='content'>
            <p>Hi, I'm Dishank Girase</p>
            <h1>I'm a <br></br><Typewriter
              words={["</ Designer >","</ Coder >","</ Developer >"]} loop cursor cursorStyle="|" typeSpeed={100} deleteSpeed={100} delaySpeed={1000}/></h1>
                      <a href={CV} download='My Resume' className='btn'>Get CV</a>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        
    </div>
    </div>
};

export default Heroimg