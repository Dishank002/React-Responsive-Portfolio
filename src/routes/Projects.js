import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import WorkCard from '../components/WorkCard';


const Projects = () => {
  return  (
  <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my recent works."/>
    <WorkCard/>
    <Footer/>
  </div>
  )
};

export default Projects