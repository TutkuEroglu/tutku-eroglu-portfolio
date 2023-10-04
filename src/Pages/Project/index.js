import React, { useState, useRef, useEffect } from 'react'
import "./Project.css"
import { ProjectData } from "./ProjectData"

const Project = ({scroll}) => {
  const projectRef = useRef(null);
  const projectHeaderRef = useRef(null);
  const firstProjectArrRef = useRef(null);
  const secondProjectArrRef = useRef(null);

  const [visibleProjects, setVisibleSkillsProject] = useState(false);
  const [visibleFirstProject, setVisibleFirstProject] = useState(false);
  const [visibleSecondProject, setVisibleSecondProject] = useState(false);

    useEffect(() => {
      if (scroll) {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const scrollProjects = () => handleScroll(projectHeaderRef, setVisibleSkillsProject);
      const scrollFirstProjectArr = () => handleScroll(firstProjectArrRef, setVisibleFirstProject);
      const scrollSecondProjectArr = () => handleScroll(secondProjectArrRef, setVisibleSecondProject);

      window.addEventListener('scroll', scrollProjects);
      window.addEventListener('scroll', scrollFirstProjectArr);
      window.addEventListener('scroll', scrollSecondProjectArr);
      
      return () => {
        window.removeEventListener('scroll', scrollProjects);
        window.removeEventListener('scroll', scrollFirstProjectArr);
        window.removeEventListener('scroll', scrollSecondProjectArr);
      }
  }, [scroll]);

  const firstProjectArr = ProjectData.slice(0, Math.ceil(ProjectData.length-2));
  const secondProjectArr = ProjectData.slice(Math.ceil(ProjectData.length-2));

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
    <div className='project' ref={projectRef}>
      <div className='project-header'>
        <span className={`project-text ${visibleProjects ? "visible" : ""}`} ref={projectHeaderRef}>MY PROJECTS</span>
      </div>
      <div className='card-element'>
      {firstProjectArr.map((val) => (
        <div className={`card ${visibleFirstProject ? "visible" : ""}`} key={val.id} ref={firstProjectArrRef}>
          <img src={val.projectImg} alt={val.projectName} className="card-image" />
          <div className="card-info">
            <div className='card-name'>
              <h2 className="project-name">{val.projectName}</h2>
              <img src={val.projectIcon} className="project-icon" alt='project-icon'/>
            </div>
            <p className="project-date">{val.projectDate}</p>
            <p className='project-info'>{val.projectInfo}</p>
            <a className='project-url' href={val.projectURL} target="_blank" rel="noopener noreferrer">Click here to see project</a>
          </div>
        </div>
      ))}
      {secondProjectArr.map((val) => (
        <div className={`card ${visibleSecondProject ? "visible" : ""}`} key={val.id} ref={secondProjectArrRef}>
          <img src={val.projectImg} alt={val.projectName} className="card-image" />
          <div className="card-info">
            <div className='card-name'>
              <h2 className="project-name">{val.projectName}</h2>
              <img src={val.projectIcon} className="project-icon" alt='project-icon'/>
            </div>
            <p className="project-date">{val.projectDate}</p>
            <p className='project-info'>{val.projectInfo}</p>
            <a className='project-url' href={val.projectURL} target="_blank" rel="noopener noreferrer">Click here to see project</a>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Project