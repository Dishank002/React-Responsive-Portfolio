import './ContactContent.css';
import React from 'react'
import IntroImg from '../assets/bg2.avif'
import {  FaGithub, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

const Heroimg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='intro-img'
        src={IntroImg} alt='IntroImg'/>
        <div className='content'>
            <p>Contact Me</p>
            <div className='footer-container'>
            <div className='left'>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        +91 9359850196
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        dishugirase002@gmail.com
                    </h4>
                </div>
                <div className='phone'>
                    <h4>
                        <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        +91 9359850196
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaGithub size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        dishugirase002@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <div>
                <form className='contact-form'>
                    <div className='contact-form-div'>
                        <label className='contact-form-tag'></label>
                        <input type='text' name='name' className='contact-form-input' placeholder='Your name'></input>
                    </div>
                    <div className='contact-form-div'>
                        <label className='contact-form-tag'></label>
                        <input type='email' name='email' className='contact-form-input' placeholder='Your email'></input>
                    </div>
                    <div className='contact-form-div'>
                        <label className='contact-form-tag'></label>
                        <textarea name='message' cols='30' rows='10' 
                        className='contact-form-input' placeholder='Write your Message'></textarea>
                        </div>
                </form>
                </div>
                
            </div>
        </div>
        </div>
    </div>
    </div>
};

export default Heroimg