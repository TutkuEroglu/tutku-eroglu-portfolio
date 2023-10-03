import React, { useRef, useEffect } from 'react'
import "./Project.css"
import { ProjectData } from "./ProjectData"

const Project = ({scroll}) => {
  const projectRef = useRef(null);

    useEffect(() => {
      if (scroll) {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [scroll]);

  return (
    <div className='project' ref={projectRef}>

      <div className='project-header'>
        <span className='project-text'>MY PROJECTS</span>
      </div>

      <div className='card-element'>
      {ProjectData.map((val) => (
        <div className="card" key={val.id}>
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