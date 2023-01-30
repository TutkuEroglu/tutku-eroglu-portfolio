import React, { useRef, useEffect } from 'react'
import "./Skills.css"

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


     
    <div class="container">
            <div class="service-box">
                <div class="service-icon yellow">
                    <div class="front-content">
                        <i class="fa fa-trophy"></i>
                        <h3>design</h3>
                    </div>
                </div>
                <div class="service-content">
                    <h3>design</h3>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                </div>
            </div>
    </div>

    </div>
  )
}

export default Skills