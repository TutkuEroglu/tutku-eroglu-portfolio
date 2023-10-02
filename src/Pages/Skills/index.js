import React, { useRef, useEffect } from 'react'
import "./Skills.css"
import { MySkills } from './MySkills';

const Skills = ({scroll}) => {
  const skillsRef = useRef(null);

    useEffect(() => {
      if (scroll) {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [scroll]);

  return (
    <div className='skills' ref={skillsRef}>

    <div className='skills-header'>
      <span className='skills-text'>Becerilerim</span>
    </div>

    <div className="skills-container">
        {MySkills.map(val => (
          <div className="skills-box" key={val.id}>
                <div className={`skills-icon ${val.skillColor}`}>
                    <div className="skills-front-content">
                        <img src={val.skillIcon} className="skills-open-icon" alt="" />
                        <h3>{val.skillName}</h3>
                    </div>
                </div>
                <div className="skills-service-content">
                    <h3>{val.skillHeader}</h3>
                    <p>{val.skillText}</p>
                </div>
            </div>
        ))}
            
    </div>

    </div>
  )
}

export default Skills