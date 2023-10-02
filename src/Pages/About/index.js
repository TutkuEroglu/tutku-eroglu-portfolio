import React, { useRef, useEffect } from 'react';
import "./About.css";
import textData from "./textData";

const About = ({scroll}) => {
  const aboutRef = useRef(null);

    useEffect(() => {
      if (scroll) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [scroll]);

  return (
    <div className='about' ref={aboutRef}>
      
      <div className='about-header'>
        <span className='about-text'>Hakkımda</span>
      </div>

      <div className='about-container'>
        <div className='about-img'></div>
        <div className='about-me'>
          <span className='about-span'>
            <h2 className='about-info-header'>{textData.header}</h2>
            <span className='about-bio'>{textData.text}</span>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default About