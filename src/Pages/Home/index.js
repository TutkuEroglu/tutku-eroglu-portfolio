import React, { useState, useEffect, useRef } from 'react'
import "./Home.css"
import About from "../About"
import Skills from '../Skills';
import Project from "../Project"
import Contact from '../Contact';

const Home = ({ visibility }) => {
  const [duration, setDuration] = useState(false)
  const texts = ["Arastırmaya yatkın ✔", "Ogrenmeye istekli ✔", "Tasarım yapmayı seven ✔", "Takım oyuncusu ✔", "Frontend Developer ✔"]
  
  const [scrollAbout, setScrollAbout] = useState(false)
  const [scrollSkills, setScrollSkills] = useState(false)
  const [scrollProject, setScrollProject] = useState(false)
  const [scrollContact, setScrollContact] = useState(false)
  

  const scrollAboutPage = () => {
    setScrollAbout(true)
    setTimeout(() => {
      setScrollAbout(false)
    }, 500);
  }

  const scrollSkillsPage = () => {
    setScrollSkills(true)
    setTimeout(() => {
      setScrollSkills(false)
    }, 500);
  }

  const scrollProjectPage = () => {
    setScrollProject(true)
    setTimeout(() => {
      setScrollProject(false)
    }, 500);
  }

  const scrollContactPage = () => {
    setScrollContact(true)
    setTimeout(() => {
      setScrollContact(false)
    }, 500);
  }

  return (
    <>
      <div className='Home'>
        <h2 className='info-span'>Merhaba, Ben</h2>
        <h1 className='info-span'>TUTKU EROĞLU</h1>
        <div className="scrolling-text">
          <ul className="home-scroll">
            {texts.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
          <div className="image-cards-container">
            <div className="image-card" onClick={scrollAboutPage}>
              <p className='card-span'>Hakkımda</p>
            </div>
            <div className="image-card" onClick={scrollSkillsPage}>
              <p className='card-span'>Becerilerim</p>
            </div>
            <div className="image-card" onClick={scrollProjectPage}>
              <p className='card-span'>Projelerim</p>
            </div>
            <div className="image-card" onClick={scrollContactPage}>
              <p className='card-span'>İletişim</p>
            </div>
          </div>
        
      </div>
      <About scroll={scrollAbout}/>
      <Skills scroll={scrollSkills}/>
      <Project scroll={scrollProject}/>
      <Contact scroll={scrollContact}/>
    </>
  )
}

export default Home;