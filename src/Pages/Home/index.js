import React, { useState } from 'react';
import "./Home.css";
import About from "../About";
import Skills from '../Skills';
import Project from "../Project";
import Contact from '../Contact';
import ScrollTop from '../../Components/ScrollTop';

const Home = () => {
  const texts = ["Research-oriented ✔", "Eager to learn ✔", "Passionate about design ✔", "Team player ✔", "Frontend Developer ✔"]
  
  const [scrollAbout, setScrollAbout] = useState(false)
  const [scrollSkills, setScrollSkills] = useState(false)
  const [scrollProject, setScrollProject] = useState(false)
  const [scrollContact, setScrollContact] = useState(false)

  const scrollToPage = (page) => {
    page(true);
    setTimeout(() => {
      page(false);
    }, 500);
  }

  return (
    <>
      <div className='Home'>
        <h2 className='info-span'>Hi, I'm</h2>
        <h1 className='info-span'>TUTKU EROGLU</h1>
        <div className="scrolling-text">
          <ul className="home-scroll">
            {texts.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
          <div className="image-cards-container">
            <div className="image-card first" onClick={() => scrollToPage(setScrollAbout)}>
              <p className='card-span firstSpan'>ABOUT ME</p>
            </div>
            <div className="image-card" onClick={() => scrollToPage(setScrollSkills)}>
              <p className='card-span'>MY SKILLS</p>
            </div>
            <div className="image-card" onClick={() => scrollToPage(setScrollProject)}>
              <p className='card-span'>MY PROJECTS</p>
            </div>
            <div className="image-card last" onClick={() => scrollToPage(setScrollContact)}>
              <p className='card-span lastSpan'>CONTACT ME</p>
            </div>
          </div>
      </div>
      <About scroll={scrollAbout}/>
      <Skills scroll={scrollSkills}/>
      <Project scroll={scrollProject}/>
      <Contact scroll={scrollContact}/>
      <ScrollTop/>
    </>
  )
}

export default Home;