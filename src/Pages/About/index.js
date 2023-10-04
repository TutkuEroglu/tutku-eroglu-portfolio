import React, { useState, useRef, useEffect } from 'react';
import "./About.css";
import textData from "./textData";

const About = ({scroll}) => {
  const aboutRef = useRef(null);
  const aboutHeaderRef = useRef(null);
  const pictureRef = useRef(null);
  const infoHeaderRef = useRef(null);
  const infoRef = useRef(null);

  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visiblePicture, setVisiblePicture] = useState(false);
  const [visibleInfoHeader, setVisibleInfoHeader] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);

  useEffect(() => {
    if (scroll) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleScrollAboutHeader = () => handleScroll(aboutHeaderRef, setVisibleHeader);
    const handleScrollPicture = () => handleScroll(pictureRef, setVisiblePicture);
    const handleScrollInfoHeader = () => handleScroll(infoHeaderRef, setVisibleInfoHeader);
    const handleScrollInfo = () => handleScroll(infoRef, setVisibleInfo);
  

    window.addEventListener('scroll', handleScrollAboutHeader);
    window.addEventListener('scroll', handleScrollPicture);
    window.addEventListener('scroll', handleScrollInfoHeader);
    window.addEventListener('scroll', handleScrollInfo);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAboutHeader);
      window.removeEventListener('scroll', handleScrollPicture);
      window.removeEventListener('scroll', handleScrollInfoHeader);
      window.removeEventListener('scroll', handleScrollInfo);
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
    <div className='about' ref={aboutRef}>
      <div className='about-header'>
        <span className={`about-text ${visibleHeader ? 'visible' : ''}`} ref={aboutHeaderRef}>ABOUT ME</span>
      </div>
      <div className='about-container'>
        <div className={`about-img ${visiblePicture ? 'visible' : ''}`} ref={pictureRef}></div>
        <div className='about-me'>
          <span className='about-span'>
            <h2 className={`about-info-header ${visibleInfoHeader ? 'visible' : ''}`} ref={infoHeaderRef}>{textData.header}</h2>
            <span className={`about-bio ${visibleInfo ? 'visible' : ''}`} ref={infoRef}>{textData.text}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About