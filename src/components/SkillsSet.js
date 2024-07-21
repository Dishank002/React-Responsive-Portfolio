import './SkillsSet.css'

import React from 'react'

const SkillsSet = () => {
  return (
    <div class="skills_section">
        <div class="skills_head">
            <h1><span style={{color:'yellow'}}>My </span>Skills</h1>
        </div>
        
        <div class="skills_main">
            <div class="skill_bar">
                <div class="info">
                    <p>Java</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Java Script</p>
                    <p>50%</p>
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Python</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>React.js</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="express"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>CSS</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>MySQL</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="node"></span>
                </div>
            </div>
            
            <div class="skill_bar">
                <div class="info">
                    <p>Mongo DB</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="mongo"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSet