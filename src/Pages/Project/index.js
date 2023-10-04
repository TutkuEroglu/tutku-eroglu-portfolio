import React, { useState, useRef, useEffect } from "react";
import "./Project.css";
import { ProjectData } from "./ProjectData";

const Project = ({ scroll }) => {
  const projectRef = useRef(null);
  const projectHeaderRef = useRef(null);
  const ProjectArrRef = useRef([]);

  const [visibleProjects, setVisibleProject] = useState(false);
  const [projectVisibilities, setProjectVisibilities] = useState([]);

  useEffect(() => {
    if (scroll) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setProjectVisibilities(new Array(ProjectData.length).fill(false));

    const scrollProjectArr = () => handleScrollArr();
    const handleScrollArr = () => {
      const newProjectVisibilities = ProjectArrRef.current.map((ref, index) => {
        const scrollY = window.scrollY;
        const projectOffsetTop = ref.offsetTop;
        
        return projectOffsetTop - scrollY <= 800;
      });

      setProjectVisibilities(newProjectVisibilities);
    };

    scrollProjectArr();
    const scrollProjects = () =>
      handleScroll(projectHeaderRef, setVisibleProject);

    window.addEventListener("scroll", scrollProjects);
    window.addEventListener("scroll", handleScrollArr);

    return () => {
      window.removeEventListener("scroll", scrollProjects);
      window.removeEventListener("scroll", handleScrollArr);
    };
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
  };

  return (
    <div className="project" ref={projectRef}>
      <div className="project-header">
        <span
          className={`project-text ${visibleProjects ? "visible" : ""}`}
          ref={projectHeaderRef}
        >
          MY PROJECTS
        </span>
      </div>
      <div className="card-element">
        {ProjectData.map((val, index) => (
          <div
            className={`card ${projectVisibilities[index] ? "visible" : ""}`}
            key={val.id}
            ref={(element) => {
              ProjectArrRef.current[index] = element;
            }}
          >
            <img
              src={val.projectImg}
              alt={val.projectName}
              className="card-image"
            />
            <div className="card-info">
              <div className="card-name">
                <h2 className="project-name">{val.projectName}</h2>
                <img
                  src={val.projectIcon}
                  className="project-icon"
                  alt="project-icon"
                />
              </div>
              <p className="project-date">{val.projectDate}</p>
              <p className="project-info">{val.projectInfo}</p>
              <a
                className="project-url"
                href={val.projectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to see project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
