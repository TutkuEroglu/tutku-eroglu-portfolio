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
        <span className="contact-text">İletişim</span>
      </div>

      <div className="social-btns">
        <a className="btn instagram" href="/" target="_blank">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="btn linkedin" href="/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="btn twitter" href="/">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="btn github" href="/">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
