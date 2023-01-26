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
    <div className='Skills' ref={skillsRef}>

       <div className='about-header'>
        <span className='about-text'>Becerilerim</span>
      </div>

      

    </div>
  )
}

export default Skills