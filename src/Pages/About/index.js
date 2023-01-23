import React from 'react'
import "./index.css"

const About = () => {
  return (
    <div className='about'>
      
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