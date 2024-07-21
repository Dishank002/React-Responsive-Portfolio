import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import SkillsSet from '../components/SkillsSet';


const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SKILLS." text="Some of my expertise."/>
      <SkillsSet/>
      <Footer/>
    </div>
    )
};

export default Skills;