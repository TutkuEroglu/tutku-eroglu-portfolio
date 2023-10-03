import React, { useRef, useEffect } from "react";
import "./Contact.css";

const Contact = ({ scroll }) => {
  const contactRef = useRef(null);


  useEffect(() => {
    if (scroll) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);


  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-header">
        <span className="contact-text">CONTACT ME</span>
      </div>

      <div className="social-btns">
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
