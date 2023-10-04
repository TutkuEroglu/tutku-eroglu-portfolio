import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

const Contact = ({ scroll }) => {
  const contactRef = useRef(null);
  const contactHeaderRef = useRef(null);
  const contactIconRef = useRef(null);

  const [visibleContact, setVisibleContact] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState(false);

  useEffect(() => {
    if (scroll) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const scrollContact = () => handleScroll(contactHeaderRef, setVisibleContact);
    const scrollIcons = () => handleScroll(contactIconRef, setVisibleIcons);

    window.addEventListener('scroll', scrollContact);
    window.addEventListener('scroll', scrollIcons);
      
    return () => {
      window.removeEventListener('scroll', scrollContact);
      window.removeEventListener('scroll', scrollIcons);
    }
  }, [scroll]);

  const handleScroll = (currentRef, visibleRef) => {
    const scrollY = window.scrollY;
    const aboutOffsetTop = currentRef.current.offsetTop;
    if (aboutOffsetTop - scrollY <= 900) {
      visibleRef(true);
    } else {
      visibleRef(false);
    }
  }

  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-header">
        <span className={`contact-text ${visibleContact ? "visible" : ""}`} ref={contactHeaderRef}>CONTACT ME</span>
      </div>

      <div className={`social-btns ${visibleIcons ? "visible" : ""}`} ref={contactIconRef}>
        <a className="btn linkedin" href="https://www.linkedin.com/in/tutku-eroglu/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="btn github" href="https://github.com/TutkuEroglu" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a className="btn earmark" href="https://drive.google.com/file/d/1qwnhIv2w_Ic51RuqCjKg8BvkBET5HNr0" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-file-earmark-person-fill"></i>
        </a>
        <a className="btn twitter" href="https://twitter.com/Randqua" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="btn instagram" href="https://www.instagram.com/randqua" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
