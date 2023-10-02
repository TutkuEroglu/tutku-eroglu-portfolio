import React, { useState } from 'react';
import "./Home.css";
import About from "../About";
import Skills from '../Skills';
import Project from "../Project";
import Contact from '../Contact';
import ScrollTop from '../../Components/ScrollTop';

const Home = ({ visibility }) => {
  const texts = ["Arastırmaya yatkın ✔", "Ogrenmeye istekli ✔", "Tasarım yapmayı seven ✔", "Takım oyuncusu ✔", "Frontend Developer ✔"]
  
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
            <div className="image-card first" onClick={() => scrollToPage(setScrollAbout)}>
              <p className='card-span firstSpan'>Hakkımda</p>
            </div>
            <div className="image-card" onClick={() => scrollToPage(setScrollSkills)}>
              <p className='card-span'>Becerilerim</p>
            </div>
            <div className="image-card" onClick={() => scrollToPage(setScrollProject)}>
              <p className='card-span'>Projelerim</p>
            </div>
            <div className="image-card last" onClick={() => scrollToPage(setScrollContact)}>
              <p className='card-span lastSpan'>İletişim</p>
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