import React, { useState, useRef, useEffect } from 'react'
import "./Skills.css"
import { MySkills } from './MySkills';

const Skills = ({scroll}) => {
  const skillsRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const firstArrRef = useRef(null);
  const secondArrRef = useRef(null);

  const [visibleSkills, setVisibleSkills] = useState(false);
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);

    useEffect(() => {
      if (scroll) {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const scrollSkills = () => handleScroll(skillsHeaderRef, setVisibleSkills);
      const scrollFirstArr = () => handleScroll(firstArrRef, setVisibleFirst);
      const scrollSecondArr = () => handleScroll(secondArrRef, setVisibleSecond);

      window.addEventListener('scroll', scrollSkills);
      window.addEventListener('scroll', scrollFirstArr);
      window.addEventListener('scroll', scrollSecondArr);
      
      return () => {
        window.removeEventListener('scroll', scrollSkills);
        window.removeEventListener('scroll', scrollFirstArr);
        window.removeEventListener('scroll', scrollSecondArr);
      }
  }, [scroll]);

  const firstArr = MySkills.slice(0, Math.ceil(MySkills.length / 2));
  const secondArr = MySkills.slice(Math.ceil(MySkills.length / 2));

  const handleScroll = (currentRef, visibleRef) => {
    const scrollY = window.scrollY;
    const aboutOffsetTop = currentRef.current.offsetTop;

    if (aboutOffsetTop - scrollY <= 800) {
      if (scrollY - aboutOffsetTop >= 320) {
        visibleRef(false);
      } else {
        visibleRef(true);
      }
    } else {
      visibleRef(false);
    }
  }

  return (
    <div className='skills' ref={skillsRef}>

    <div className='skills-header'>
      <span className={`skills-text ${visibleSkills ? "visible" : ""}`} ref={skillsHeaderRef}>MY SKILLS</span>
    </div>

    <div className="skills-container">
        {firstArr.map(val => (
          <div className={`skills-box ${visibleFirst ? "visible" : ""}`} key={val.id} ref={firstArrRef}>
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

        {secondArr.map(val => (
          <div className={`skills-box ${visibleSecond ? "visible" : ""}`} key={val.id} ref={secondArrRef}>
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