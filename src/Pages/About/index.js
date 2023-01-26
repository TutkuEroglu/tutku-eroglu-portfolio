import React, { useRef, useEffect } from 'react'
import "./About.css"

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
            <h2 className='about-info-header'>Merhabalar, Ben Tutku EROĞLU</h2>
            <span>Çukurova/Adana da ikamet etmekteyim.Frontend developerim ve 24 yasındayım.</span>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default About