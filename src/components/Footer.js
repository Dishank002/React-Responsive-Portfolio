import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='left-container'>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: 'yellow', marginRight: '2rem'}}/>
                        +91 9359850196
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: 'yellow', marginRight: '2rem'}}/>
                        dishugirase002@gmail.com
                    </h4>
                </div>
                </div>
            </div>
            <div className='right'>
                <div className='right-container'>
                <h4>
                     Designed by Dishank Girase.
                </h4>
                
                <div className='social'>
                    <a href='https://www.linkedin.com/in/dishankgirase/'>
                    <FaLinkedin
                        size={20}
                        style={{color: 'yellow', marginRight:'1rem'}}
                    /></a>
                    <a href='https://www.instagram.com/dishank_002/'>
                    <FaInstagram
                        size={20}
                        style={{color: 'yellow', marginRight:'1rem'}}
                    /></a>
                    <a href='https://github.com/Dishank002'>
                    <FaGithub
                        size={20}
                        style={{color: 'yellow', marginRight:'1rem'}}
                    /></a>
                    <a href='https://twitter.com/DishankGirase'>
                    <FaTwitter
                        size={20}
                        style={{color: 'yellow', marginRight:'1rem'}}
                    /></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer