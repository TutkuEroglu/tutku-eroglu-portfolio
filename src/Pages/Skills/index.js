import React, { useState, useRef, useEffect } from 'react'
import "./Skills.css"
import { MySkills } from './MySkills';

const Skills = ({scroll}) => {
  const skillsRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const skillsArrRef = useRef([]);

  const [visibleSkills, setVisibleSkills] = useState(false);
  const [visibleArr, setVisibleArr] = useState([]);

    useEffect(() => {
      if (scroll) {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      setVisibleArr(new Array(MySkills.length).fill(false));

      const scrollSkillsArr = () => handleScrollSkills();

      const handleScrollSkills = () => {
        const newSkillsVisibilities = skillsArrRef.current.map((ref, index) => {
          const scrollY = window.scrollY;
          const projectOffsetTop = ref.offsetTop;
          console.log(scrollY)
          console.log(projectOffsetTop)
          return projectOffsetTop - scrollY <= 1000;
        });
  
        setVisibleArr(newSkillsVisibilities);
      };

      const scrollSkills = () => handleScroll(skillsHeaderRef, setVisibleSkills);

      window.addEventListener('scroll', scrollSkills);
      window.addEventListener('scroll', scrollSkillsArr);
      
      return () => {
        window.removeEventListener('scroll', scrollSkills);
        window.removeEventListener('scroll', scrollSkillsArr);
      }
  }, [scroll]);

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
        {MySkills.map((val,index) => (
          <div className={`skills-box ${visibleArr[index] ? "visible" : ""}`} key={val.id} ref={(element) => skillsArrRef.current[index] = element}>
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