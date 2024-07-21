import './WorkCard.css';
import proj1 from '../assets/Proj1.jpg'
import proj2 from '../assets/Proj5.jpg'
import proj3 from '../assets/Proj6.jpg'


import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'><span style={{color:'yellow'}}>My </span>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={proj1} alt='image'/>
                <h2 className='project-title'>Rural E-Health</h2>
                <div className='proj-details'>
                    <p>Developed Web Application using JDBC for Database Connectivity and Designed dashboard for HR, Admin and Candidate with features like remote patient monitoring,
                    telemedicine consultations, and centralized health records, addressing symptoms with disease dataset.
                    </p>
                    <div className='proj-btns'>
                        <NavLink to='#' className='btn'>
                            View
                        </NavLink>
                        <NavLink to='#' className='btn'>
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={proj2} alt='image'/>
                <h2 className='project-title'>Banking System</h2>
                <div className='proj-details'>
                    <p>Developed a banking system with database connectivity providing customers
                    platform for managing their finances.
                    Implemented essential features such as account management, transaction processing, and user
                    authentication to create a secure and efficient financial platform.</p>
                    <div className='proj-btns'>
                        <NavLink to='#' className='btn'>
                            View
                        </NavLink>
                        <NavLink to='#' className='btn'>
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={proj3} alt='image'/>
                <h2 className='project-title'>Inventory Management System</h2>
                <div className='proj-details'>
                    <p>Developed Web Application Inventory Management System using JDBC for Database Connectivity.
                        A user-friendly solution designed for efficient tracking and control of inventory. 
                        With features like real-time stock monitoring, order management, and analytics, it streamlines operations.
                    </p>
                    <div className='proj-btns'>
                        <NavLink to='#' className='btn'>
                            View
                        </NavLink>
                        <NavLink to='#' className='btn'>
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
